import React from "react";
import useLocalStorage from "../hooks/Custom hooks/useLocalStorage";

const LocalStorage = () => {
  const [name, setName] = useLocalStorage("name", "");
  return (
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
  );
};

export default LocalStorage;
