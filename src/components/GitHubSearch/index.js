import React, { Component } from 'react';
import Select from 'react-select';
import fetch from 'isomorphic-fetch';
import UserOption from '../UserOption';

class GitHubSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      backspaceRemoves: true
    }
  }

  onChange(value) {
    this.getUser(value);
    this.setState({value});
  }


  getUsers(username) {
    if (!username) {
      return Promise.resolve({ options: [] });
    }

    return fetch(`//api.github.com/search/users?q=${username}`)
    .then((response) => response.json())
    .then((json) => {
      return { options: json.items };
    });
  }

  getUser(value, event) {
    if (value) {
      window.open(value.html_url);
    }
  }

  render() {
    const placeholder = <span>Type a GitHub username</span>;

    return (
      <div className="search-input">
        <Select.Async
          name="github-user-search"
          value={this.state.value}
          loadOptions={this.getUsers}
          onChange={this.onChange.bind(this)}
          onValueClick={this.getUser}
          backspaceRemoves={this.state.backspaceRemoves}
          valueKey="id"
          labelKey="login"
          optionComponent={UserOption}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default GitHubSearch;