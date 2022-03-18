import { useState } from "react";
import "../css/Example8.css";

export function Example8() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItem = (event) => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        name: itemName,
      },
    ]);
    setItemName("");
  };

  return (
    <>
      <h3>--- State ---</h3>
      <form onSubmit={addItem}>
        <label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
      </form>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}
