import React from "react";
import { useSpring, animated } from "react-spring";

const Component2 = ({ toggle, setToggle }) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    delay: 1000,
  });
  return (
    <animated.div style={props}>
      <div style={c2Style}>
        <h1>Component2</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas rerum
          consequatur autem recusandae hic tempore, aliquam sequi, optio
          officiis placeat facilis, doloribus quae corporis? Odio quis enim
          ullam eligendi esse.
        </p>
        <button style={buttonStyle} onClick={() => setToggle(!toggle)}>Toggle Component3</button>
      </div>
    </animated.div>
  );
};

export default Component2;

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem",
};

const buttonStyle = {
    background: '#777',
    color: '#eee',
    fontSize: '17px',
    padding: '7px 15px',
    border: 'none',
    outline: 'none'
}
