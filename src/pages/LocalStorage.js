import { Fragment } from "react";
import Navbar from "../components/Navbar";
import useLocalStorage from "../hooks/Custom hooks/useLocalStorage";

const LocalStorage = () => {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <Fragment>
      <Navbar />
      <div className="localStorage">
        <h2>Typed every letter will be saved to the Browser's Localstorage</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type something..."
        />
        {name && <p>{name}</p>}
      </div>
    </Fragment>
  );
};

export default LocalStorage;
