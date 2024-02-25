import React, { useState } from "react";

const AddTodo = ({ handleAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() => {
          handleAddTodo(newTodo);
          setNewTodo("");
        }}
      >
        Add TO DO
      </button>
    </div>
  );
};

export default AddTodo;
