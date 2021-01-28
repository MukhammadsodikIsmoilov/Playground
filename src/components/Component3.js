import React from "react";
import { useSpring, animated } from "react-spring";

const Component3 = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <animated.div style={props}>
      <div style={c3Style}>
        <h1>Component3</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas rerum
          consequatur autem recusandae hic tempore, aliquam sequi, optio
          officiis placeat facilis, doloribus quae corporis? Odio quis enim
          ullam eligendi esse.
        </p>
      </div>
    </animated.div>
  );
};

export default Component3;

const c3Style = {
  background: "skyblue",
  color: "white",
  padding: "1.5rem 1.5rem 5rem 1.5rem",
};