import React from "react";

export const Example = () => {
  // const [count, setCount] = React.useState(10);
  // const [text, setText] = React.useState("");

  // setTimeout(() => {
  //   setCount((a) => a - 1);
  // }, 1000);

  // React.useEffect(() => {
  //   setInterval(() => {
  //     setCount((a) => a - 1);
  //   }, 1000);
  // }, []);
  // //https://jsonplaceholder.typicode.com/users

  // const [users, setUsers] = React.useState();
  // React.useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((json) => setUsers(json));
  // }, []);

  // const [colors, setColors] = React.useState(["🟢Green", "🔴Red", "🟡Yellow"]);
  const [tasks, setTasks] = React.useState(["Тестовая задача"]);
  const dsfs = new Date().toISOString();
  const onclickAdd = () => {
    const text = prompt("Текст Задачи");
    setTasks([...tasks, text]);
  };

  const onClickEdit = (index) => {
    const text = prompt("Текст Задачи");
    setTasks(
      tasks.map((el, i) => {
        if (i === index) {
          return text;
        } else {
          return el;
        }
      }),
    );
  };

  const onClickRemove = (index) => {
    setTasks(tasks.filter((el, i) => i !== index));
  };

  return (
    <>
      {/* <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setCount((a) => a + 1)}> put on it</button> */}
      {/* <h1>{count}</h1> */}
      <ul style={{ listStyle: "none" }}>
        {tasks.map((task, i) => (
          <li key={i}>
            {task}
            <button onClick={() => onClickEdit(i)}>Edit</button>
            <button onClick={() => onClickRemove(i)}>X</button>
          </li>
        ))}

        {/* {colors.map((color) => (
          <li key={color}>{color}</li>
        ))} */}
        {/* {users?.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))} */}
      </ul>
      <button onClick={onclickAdd}>Add</button>
    </>
  );
};
