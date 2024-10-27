import { useEffect, useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data);
  };

  const addTodo = async (todo) => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: todo.title,
        description: todo.description,
      }),
    }).then(async (res) => {
      let data = await res.json();
      fetchTodos();
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <CreateTodo addTodo={addTodo}></CreateTodo>
      <Todos todos={todos} fetchTodos={fetchTodos}></Todos>
    </div>
  );
}

export default App;
