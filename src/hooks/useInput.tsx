import { useState } from "react";

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
}
