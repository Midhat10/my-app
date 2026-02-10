import styles from "./App.module.scss";
import React from "react";

// type CounterState = {
//   count: number;
// };

// type CounterProps = {
//   title?: string;
// };

// class Counter extends Component<CounterProps, CounterState> {
//   state = {
//     count: 0,
//   };

//   handleClick = (
//     e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
//   ) => {
//     console.log(`${e.clientX}, ${e.clientY}`);
//     this.setState(({ count }) => ({
//       count: ++count,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>
//           {this.props.title}
//           {this.state.count}
//         </h1>
//         <button onClick={this.handleClick}>+1</button>
//         <a href="#" onClick={this.handleClick}>
//           Link
//         </a>
//       </div>
//     );
//   }
// }

// class Form extends Component<{}, {}> {
//   handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
//     console.log(e.currentTarget);
//   };
//   handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Submitted!");
//   };

//   handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     console.log("Coppyied");
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Simple text:
//           <input
//             onFocus={this.handleFocus}
//             onCopy={this.handleCopy}
//             type="text"
//             name="text"
//           />
//           <button type="submit">Submit</button>
//         </label>
//       </form>
//     );
//   }
// }

// function App() {
//   return (
//     <div className={styles["App"]} style={{ backgroundColor: "gray" }}></div>
//   );
// }

// const App: React.FC = () => <Form />;

function App() {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);
  const ulRef = React.useRef();

  console.log(ulRef);

  const addNumber = () => {
    const lastNumber = numbers[numbers.length - 1];
    setNumbers([...numbers, lastNumber + 1]);
  };

  const handleScroll = () => {
    console.log("was the scroll, russia!");
  };

  React.useEffect(() => {
    ulRef.current.addEventListener("scroll", handleScroll);
  }, []);

  const removeScroll = () => {
    ulRef.current.removeEventListener("scroll", handleScroll);
  };

  return (
    <div>
      <ul ref={ulRef} style={{ height: "70px", overflowY: "scroll" }}>
        {numbers.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <button onClick={addNumber}>✅ Добавить число</button>
      <br />
      <button onClick={removeScroll}>⛔ Не следить</button>
    </div>
  );
}

export default App;
