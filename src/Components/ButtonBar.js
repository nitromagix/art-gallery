import React, { useState } from "react";

function ButtonBar(props) {
  const [theInput, setTheInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleInput(theInput);
    e.target.reset();
  };
  return (
    <div className="buttons">
      <button value={-5} onClick={props.handleIterate}>
        Way Back
      </button>
      <button value={-1} onClick={props.handleIterate}>
        Back
      </button>
      <div>|</div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTheInput(e.target.value)} />
        <button type="submit">Submit!</button>
      </form>
      <div>|</div>
      <button value={1} onClick={props.handleIterate}>
        Next
      </button>
      <button value={5} onClick={props.handleIterate}>
        Big Next
      </button>
    </div>
  );
}

export default ButtonBar;
