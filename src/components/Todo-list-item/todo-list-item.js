import React from 'react';

import './todo-list-item.css'

class TodoListItem extends React.Component {
  render() {
    return (
      <div className="todo-list-item">
      <span>{ this.props.label }</span>
      <div className="buttons">
        <i class="fas fa-trash-alt"></i>
        <i class="fas fa-exclamation"></i>
      </div>
    </div>
    );
  };
};


export default TodoListItem;