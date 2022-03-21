import { useState } from "react";

export function Example5() {
  const [age, setAge] = useState();

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      <h3>--- Conditional rendering ---</h3>

      <input
        value={age}
        onChange={handleChange}
        placeholder="Input your age"
        type="number"
        min="1"
      />

      <Age age={age} />
    </>
  );
}

function Age(props) {
  const { age } = props;

  if (!age) {
    return <div>You haven't specified your age</div>;
  }

  if (age < 18) {
    return <div>You are not an adult</div>;
  }

  return <div>You are an adult</div>;
}
