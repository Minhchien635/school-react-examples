export function Example4() {
  const handleClick = () => {
    alert("Clicked!");
  };
  
  return (
    <>
      <h3>--- Handling Events ---</h3>
      <button className="btn btn-primary" onClick={handleClick}>
        Click
      </button>
    </>
  );
}
