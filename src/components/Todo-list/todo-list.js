import React from 'react';

import TodoListItem from '../Todo-list-item/todo-list-item';

import './todo-list.css'

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <TodoListItem label="Drink juice"/>
        <TodoListItem label="Drink coffee"/>
        <TodoListItem label="Drink soda"/>
      </div>
    )
  }
}


export default TodoList;