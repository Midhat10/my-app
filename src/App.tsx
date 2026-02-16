import { useRef, useState } from "react";
import Hover from "./components/Hover.tsx";
import useHover from "./hooks/userHover.js";
import List from "./components/List.tsx";
import ky from "ky";
import useDebounce from "./hooks/useDebounce.js";

function App() {
  const [value, setValue] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  async function search(query) {
    try {
      const todos = await ky(
        `https://jsonplaceholder.typicode.com/todos?query=` + query,
      ).json();
      console.log(todos);
    } catch (e) {
      console.log(e.message);
    }
  }

  const onChange = (e) => {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  };
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default App;
