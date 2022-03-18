import React, { useRef, useState, useEffect } from "react";

export function Example6() {
  const [count, setCount] = useState(0);
  const a = useRef(null);
  useEffect(() => {
    a.current.innerHTML = `Your clicked ${count} times`;
  }, [count]);
  return (
    <>
      <div>
        <h3>--- Effect ---</h3>
        <h1 ref={a}></h1>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    </>
  );
}
