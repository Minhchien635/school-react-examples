import { useState } from "react";

export function Example9() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const printValues = (e) => {
    e.preventDefault();
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <>
      <h3>--- State ---</h3>
      <form onSubmit={printValues}>
        <label>
          Username:
          <input
            className="form-control"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            name="username"
            type="text"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            type="password"
          />
        </label>
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}
