import { useState } from "react";

export function Example3() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <>
      <h3>--- State ---</h3>
      <button className="btn btn-primary" onClick={increment}>
        {count}
      </button>
    </>
  );
}
