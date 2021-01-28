import React from "react";

function usePersistentValue(initialValue) {
  return React.useState({
    current: initialValue,
  })[0];
}

function Counter() {
  const [count, setCount] = React.useState(0);
  let id = usePersistentValue(null); // useRef is used instead of usePersistentvalue(null), doesn't trigger a re-render when the dom updated 
  console.log("After id: ", id.current);
  const clear = () => {
    window.clearInterval(id.current);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    console.log("UseEffect: ", id.current);
    return clear;
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={clear}>Stop</button>
    </div>
  );
}

export default Counter;
