import React, { useRef } from "react";
import Button from "./Button.tsx";
import Input from "./Input.tsx";

const App = () => {
  const inputRef = useRef(null);
  console.log(inputRef);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <Input ref={inputRef} />
      <Button onClick={handleFocus}>"hi"</Button>
    </>
  );
};

export default App;
