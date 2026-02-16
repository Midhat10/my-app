import { useRef, useState } from "react";
import ky from "ky";

import useRequest from "./hooks/useRequest.js";

function App() {
  const [todos, loading, error] = useRequest(kyTodos);

  function kyTodos() {
    return ky.get(`https://jsonplaceholder.typicode.com/todsdos`);
  }
  console.log(todos);

  if (loading) {
    return <h1>Идёт загрузка ...</h1>;
  }

  if (error) {
    return <h1>Произошла ошибка</h1>;
  }
  return (
    <div>
      {/* {loading && <h1>Идёт загрузка</h1>} */}
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} style={{ padding: 30, border: "2px solid black" }}>
            {todo.id} {todo.title}
          </div>
        ))}
    </div>
  );
}

export default App;
