import { useState, useRef, useEffect } from "react";
import "../css/Example10.css";

export function Example10() {
  const inputRef = useRef();
  const [value, setValue] = useState("");
  const content = useRef();

  useEffect(() => {
    content.current.innerHTML = value;
  }, [value]);

  return (
    <>
      <h3>--- Effect ---</h3>
      <input
        className="input"
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h4 ref={content}></h4>
    </>
  );
}
