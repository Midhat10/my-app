import { useState } from "react";
import useInput from "./hooks/useInput.tsx";

function App() {
  const username = useInput("");
  const password = useInput("");
  return (
    <div>
      <input {...username} type="text" placeholder="username" />
      <input {...password} type="text" placeholder="password" />
      <button
        onClick={() => console.log(username.value, password.value)}
      ></button>
    </div>
  );
}

export default App;
