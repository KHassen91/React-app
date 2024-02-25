import React from "react";

const TodoItem = ({ todoList, handleDelete, handleCompleted }) => {
  return (
    <div>
      <p className={todoList.completed ? "completed" : ""}>{todoList.title}</p>
      <button onClick={() => handleCompleted(todoList.id)}>Completed</button>
      <button onClick={() => handleDelete(todoList.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
