import React, { useRef, useState, useEffect } from "react";

export function Example6() {
  useEffect(() => {
    alert(`Component mounted!`);
  }, []);
  return (
    <>
      <div>
        <h3>--- Use Effect ---</h3>
      </div>
    </>
  );
}
