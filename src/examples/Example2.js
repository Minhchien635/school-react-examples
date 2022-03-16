import React from "react";

export function Example2() {
  return (
    <>
      <h3>--- Props ---</h3>
      <A name="Tran" />
    </>
  );
}

function A(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
}
