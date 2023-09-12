import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  
};

const Application = () => {
  const [name, setName] = useState("");

  const reset = () => {
    setName("");
  };
  
  return (
    <main>
      <input
      value={name}
      onChange={(event) => setName(event.target.value)} placeholder='TYPE YOUR NAME'></input>
      <button onClick={reset}>Reset</button>
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
