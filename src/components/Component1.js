import React from "react";
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";

const Component1 = () => {
  const props = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
  });
  return (
    <animated.div style={props}>
      <div style={c1Style}>
        <h1>Component1</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas rerum
          consequatur autem recusandae hic tempore, aliquam sequi, optio
          officiis placeat facilis, doloribus quae corporis? Odio quis enim
          ullam eligendi esse.
        </p>
        <Spring from={{ number: 0 }} to={{ number: 10 }} config={{duration: 10000}}>
          {(props) => (
            <div style={props}>
              <h1 stye={counter}>{props.number.toFixed()}</h1>
            </div>
          )}
        </Spring>
      </div>
    </animated.div>
  );
};

export default Component1;

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem",
};

const counter = {
  background: "#000",
  width: "100px",
  borderRadius: "50%",
  textAlign: 'center'
};
