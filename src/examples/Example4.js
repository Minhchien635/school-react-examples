export function Example4() {
  const onSubmit = () => {
    alert("Hello");
  };
  return (
    <>
      <h3>--- Handling Events ---</h3>
      <button className="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </>
  );
}
