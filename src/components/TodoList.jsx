import React, { useState } from 'react';
import Todoform from './Todoform';
import Todo from './Todo';


function TodoList() {
    const [todos, setTodos] = useState([]);
  
    const addTodo = (todo) => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }
      const newTodos = [todo, ...todos];
      setTodos(newTodos);
    };
  
    const updateTodo = (todoId, newValue) => {
        if (!newValue || /^\s*$/.test(newValue)) {
          return;
        }
        setTodos((prevTodos) =>
          prevTodos.map((todo) => {
            if (todo.id === todoId) {
              return { ...todo, text: newValue.text };
            }
            return todo;
          })
        );
      };
      
      
       
  
    const removeTodo = (id) => {
      const removeArr = [...todos].filter(todo => todo.id !== id);
      setTodos(removeArr);
    }; 
  
    const completeTodo = id => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete 
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
  
    return (
      <div>
        <h1>What's the Plan for Today?</h1>
        <Todoform onSubmit={addTodo} />

        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
      </div>
    );
  }
  
  export default TodoList;
  