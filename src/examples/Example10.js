import { useState, useEffect } from "react";
import "../css/Example10.css";

export function Example10() {
  const [visible, setVisible] = useState(true);

  function handleToggle() {
    setVisible(!visible);
  }

  return (
    <div>
      <button onClick={handleToggle} className="btn btn-primary">
        Toggle
      </button>
      {visible && <Component />}
    </div>
  );
}

export function Component() {
  useEffect(() => {
    return () => {
      alert("Component unmounted!");
    };
  }, []);

  return <div>Component</div>;
}
