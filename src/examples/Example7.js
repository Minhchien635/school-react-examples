import { useState, useEffect } from "react";
import "../css/Example7.css";

export function Example7() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert(`You clicked ${count} times.`);
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h3>--- Effect on State change ---</h3>
      <button className="btn btn-primary" onClick={handleClick}>
        Click
      </button>
    </>
  );
}
