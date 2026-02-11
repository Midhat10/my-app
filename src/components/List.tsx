import React, { useEffect, useRef, useState } from "react";
import ky from "ky";

const List = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;
  const parentRef = useRef();
  const childRef = useRef();

  const kyTodos = async (page, limit) => {
    try {
      const todos = await ky(
        `https://jsonplaceholder.typicode.com/todos/?_limit=${limit}&_page=${page}`,
      ).json();
      setTodos(todos);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    kyTodos(page, limit);
  }, []);

  return (
    <div ref={parentRef}>
      {todos.map((todo) => (
        <div key={todo.id} style={{ padding: 30, border: "2px solid black" }}>
          {todo.id} {todo.title}
        </div>
      ))}
      <div ref={childRef} style={{ height: 20, backgroundColor: "green" }} />
    </div>
  );
};

export default List;
