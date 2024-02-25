import { useState } from "react";
import { data } from "./components/data";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(data);

  const handleAddTodo = (title) => {
    const ids = todo.map((el) => el.id);
    const maxId = Math.max(...ids);
    setTodo([
      ...todo,
      {
        userId: 1,
        id: maxId + 1,
        title: title,
        completed: false,
      },
    ]);
  };

  const handleCompleted = (id) => {
    setTodo(
      todo.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((el) => el.id !== id));
  };

  return (
    <div className="App">
      <AddTodo handleAddTodo={handleAddTodo} />
      {todo
        .sort((a, b) => b.id - a.id)
        .map((el) => (
          <TodoItem
            todoList={el}
            handleDelete={handleDelete}
            handleCompleted={handleCompleted}
          />
        ))}
    </div>
  );
}

export default App;
