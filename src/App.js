import { Routes, Route } from "react-router-dom";
import {
  Example1,
  Example2,
  Example3,
  Example4,
  Example5,
  Example6,
  Example7,
  Example8,
  Example9,
  Example10,
} from "./examples";
import "./App.css";

const examples = [
  Example1,
  Example2,
  Example3,
  Example4,
  Example5,
  Example6,
  Example7,
  Example8,
  Example9,
  Example10,
];

function App() {
  return (
    <div className="App">
      <Routes>
        {examples.map((Ex, i) => (
          <Route key={i} path={`/${i + 1}`} element={<Ex />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
