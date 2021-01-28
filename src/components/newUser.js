import { useRef } from "react";
import axios from "axios";

const NewUser = () => {
  const nameRef = useRef("");
  const jobRef = useRef("");

  const createUser = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const job = jobRef.current.value;
    const res = await axios({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, job})
    });
    return res
  };

  return (
    <form onSubmit={createUser} className="post_wrapper">
      <div className="input_field">
        <input type="text" name="name" placeholder="Name..." ref={nameRef} />
      </div>
      <div className="input_field">
        <input type="text" name="job" placeholder="Job..." ref={jobRef} />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default NewUser;
