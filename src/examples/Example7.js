import { useState, useRef, useEffect } from "react";
import "../css/Example7.css";

export function Example7() {
  const [count, setCount] = useState(30);
  const [color, setColor] = useState("red");
  const red = useRef();
  const yellow = useRef();
  const green = useRef();
  const number = useRef();

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    red.current.classList.remove("red");
    yellow.current.classList.remove("yellow");
    green.current.classList.remove("green");

    switch (color) {
      case "red":
        red.current.classList.add("red");
        break;
      case "yellow":
        yellow.current.classList.add("yellow");
        break;
      case "green":
        green.current.classList.add("green");
        break;
    }
  }, [color]);

  if (count < 0) {
    setCount(30);
    switch (color) {
      case "red":
        setColor("yellow");
        break;
      case "yellow":
        setColor("green");
        break;
      case "green":
        setColor("red");
        break;
    }
  }

  return (
    <>
      <h3>--- Effect, State ---</h3>
      <div className="number">
        <h3>{count}</h3>
      </div>
      <div ref={red} className="circle"></div>
      <div ref={yellow} className="circle"></div>
      <div ref={green} className="circle"></div>
    </>
  );
}
