import React, { useState, useEffect, useRef } from 'react';

function Todoform(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit} ref={inputRef}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update Code"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
          />
          <button className="todo-button edit">Update todo</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
}

export default Todoform;
