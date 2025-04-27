import React from 'react';

const TodoItem = ({ todo, onButtonClick, buttonLabel }) => {
  return (
    <div className="todo-item">
      <p>{todo.title}</p>
      <button onClick={() => onButtonClick(todo.id)}>{buttonLabel}</button>
    </div>
  );
};

export default TodoItem;
