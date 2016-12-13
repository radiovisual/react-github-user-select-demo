import React, { Component } from 'react';
import classNames from 'classnames';
import './UserOption.css';

class UserOption extends Component {
  handleMouseDown(event) {
    event.stopPropagation();
    event.preventDefault();
    this.props.onSelect(this.props.option, event);
  }

  handleMouseEnter (event) {
    this.props.onFocus(this.props.option, event);
  }

  handleMouseMove (event) {
    if (this.props.isFocused) {
      return;
    }
    this.props.onFocus(this.props.option, event);
  }

  render() {
    var optionClass = classNames({
      'selected': this.props.isFocused,
      'user-option': true
    });

    return (
      <div className={optionClass}
           onMouseDown={this.handleMouseDown.bind(this)}
           onMouseEnter={this.handleMouseEnter.bind(this)}
           onMouseMove={this.handleMouseMove.bind(this)}
           title={this.props.option.login}>
            <img src={this.props.option.avatar_url} alt={this.props.option.login} />
            <p>{this.props.option.login}</p>
      </div>
    );
  }
}

UserOption.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  isFocused: React.PropTypes.bool,
  isSelected: React.PropTypes.bool,
  onFocus: React.PropTypes.func,
  onSelect: React.PropTypes.func,
  option: React.PropTypes.object.isRequired,
};

export default UserOption;
