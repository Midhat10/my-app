import React, { useState } from "react";

const List = () => {
  const [todos, setTodos] = useState([]);

  const ky = () => {};

  return (
    <div>
      {todos.map((todo) => (
        <div style={{ padding: 30, border: "2px solid black" }}>
          {todo.title}
        </div>
      ))}
    </div>
  );
};

export default List;
