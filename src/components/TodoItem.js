import React, { Component } from "react";
import Proptypes from 'prop-types';

export class TodoItem extends Component {
  getStyled = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  }

  render() {
    const { id, title } = this.props.todo
    return (
      <div style = {this.getStyled()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {'  '}
          {title}
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: Proptypes.object.isRequired
}
export default TodoItem;
