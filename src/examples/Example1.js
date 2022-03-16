import React from "react";

export function Example1() {
  return (
    <>
      <h3>--- Props ---</h3>
      <Greeting fullName="Tran" />
    </>
  );
}

class Greeting extends React.Component {
  render() {
    return (
      <div className="greeting">
        <h1>Hello {this.props.fullName}</h1>
      </div>
    );
  }
}
