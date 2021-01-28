import React, { useMemo, useState, memo, useEffect } from "react";

function App() {
  const [length, set_length] = useState(3);
  const [name, set_name] = useState("John Doe");

  return (
    <>
      <input value={name} onChange={(e) => set_name(e.target.value)} />
      <NameDisplay name={name} />
      <hr />
      <input
        value={length}
        onChange={(e) => set_length(Number(e.target.value))}
      />
      <FibDisplay length={length} />
      <FibDisplay2 length={length} />
    </>
  );
}

function FibDisplay({ length }) {
  const numbers = useMemo(() => {
    console.log("Calculating numbers & rerendering...");
    const result = [1, 1];
    for (let i = 2; i < length; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }

    return result;
  }, [length]);
  console.log("useMemo: " + numbers);
  return (
    <p>
      {length} numbers of the fibonacci sequence: {numbers.join(", ")}
    </p>
  );
}

function FibDisplay2({ length }) {
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    console.log("Calculating numbers2 & rerendering2...");
    const result = [1, 1];
    for (let i = 2; i < length; i++) {
      result[i] = result[i - 1] + result[i - 2];
      setNumbers([result[i]]);
    }
  }, [length]);
  console.log("useEffect: " + numbers);
  return (
    <p>
      {length} numbers of the fibonacci sequence: {numbers}
    </p>
  );
}

const NameDisplay = memo(({ name }) => {
  console.log("Rerendering name...");
  return <p>Your name is {name}</p>;
});

export default App;
