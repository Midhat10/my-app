import { useRef, useState } from "react";
import Hover from "./components/Hover.tsx";
import useHover from "./hooks/userHover.js";

function App() {
  const ref = useRef();
  const isBlackHovering = useHover(ref);
  return (
    <div>
      <Hover />
      <div
        ref={ref}
        style={{
          width: 300,
          height: 300,
          backgroundColor: isBlackHovering ? "blue" : "black",
        }}
      ></div>
    </div>
  );
}

export default App;
