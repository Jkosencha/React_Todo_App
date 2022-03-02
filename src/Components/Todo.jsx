import React, { useState, useEffect } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        todo: todo,
        date: date,
      },
    ]);
  }



  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="text"
            placeholder="Todo"
            onChange={(e) => setTodo(e.target.value)}
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Date of completion"
            onChange={(e) => setDate(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="action">
          <button type="submit">Save</button>
        </div>
      </form>
      <div className="Table">
        <table>
          <thead>
            <tr>
              <th scope="row">Index</th>
              <th>Todo</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((t, index) => {
              return (
                <tr key={index}>
                  <th>{index+ 1}</th>
                  <td>{t.todo}</td>
                  <td>{t.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
