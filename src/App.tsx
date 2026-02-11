import { useRef, useState } from "react";
import Hover from "./components/Hover.tsx";
import useHover from "./hooks/userHover.js";
import List from "./components/List.tsx";

function App() {
  return (
    <div>
      <List />
    </div>
  );
}

export default App;
