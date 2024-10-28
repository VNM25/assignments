import React from "react";
import remove from "../assets/delete.svg"

export function Todos({ todos, fetchTodos }) {
  function markComplete(todo) {
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todo._id,
      }),
    }).then(async (res) => {
      let data = await res.json();
      fetchTodos();
    });
  }

  function deleteTodo(todo) {
    fetch("http://localhost:3000/remove", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todo._id,
      }),
    }).then(async (res) => {
      let data = await res.json();
      fetchTodos();
    });
  }

  return (
    <div className="todos">
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => {
          const id = todo._id;
          return (
            <li
              key={todo._id}
              className={todo.completed ? "completed" : "Mark as Done"}
            >
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <button onClick={() => markComplete(todo)}>Complete</button>
              <button className="delete-btn" onClick={() => deleteTodo(todo)}>
                <img src={remove}  alt="delete the todo"/>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
