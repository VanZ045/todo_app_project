import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ title, todos, onButtonClick, buttonLabel }) => {
  return (
    <div className="todo-section">
      <h2>{title}</h2>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onButtonClick={onButtonClick}
          buttonLabel={buttonLabel}
        />
      ))}
    </div>
  );
};

export default TodoList;
