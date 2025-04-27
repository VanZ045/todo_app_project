import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import FilterSortControls from './FilterSortControls';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterUserId, setFilterUserId] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const handleComplete = (id) => {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed: true } : todo));
  };

  const handleUncomplete = (id) => {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed: false } : todo));
  };

  const filteredTodos = filterUserId
    ? todos.filter(todo => todo.userId.toString() === filterUserId)
    : todos;

  const uncompletedTodos = [...filteredTodos.filter(todo => !todo.completed)].sort((a, b) => {
    if (sortOrder === 'asc') return a.title.localeCompare(b.title);
    else return b.title.localeCompare(a.title);
  });

  const completedTodos = filteredTodos.filter(todo => todo.completed);

  return (
    <div className="container">
      <h1>Todo React App</h1>
      <div className="controls">
        <FilterSortControls
          setFilterUserId={setFilterUserId}
          setSortOrder={setSortOrder}
        />
      </div>
      <div className="todo-lists">
        <TodoList
          title="Uncompleted Todos"
          todos={uncompletedTodos}
          onButtonClick={handleComplete}
          buttonLabel="Complete"
        />
        <TodoList
          title="Completed Todos"
          todos={completedTodos}
          onButtonClick={handleUncomplete}
          buttonLabel="Undo"
        />
      </div>
    </div>
  );
};

export default App;
