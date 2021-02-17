import { useRef } from "react";
import {Redirect} from 'react-router-dom'
import { useAuth } from "../../context/auth";

const SignIn = () => {
  const { signin, user } = useAuth();
  const userRef = useRef("");
  const passwordRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = userRef.current.value;
    const password = passwordRef.current.value;

    if (username.length > 2 && password.length > 5) {
      signin(username, password);
      userRef.current.value = "";
      passwordRef.current.value = "";
    } else {
      if (username.length < 3)
        console.info("Username must be at least 3 characters");
      else console.info(" Password must be at least 6 character");
    }
  };
  
  if(user.is_authenticated)
    return <Redirect to="/" />

  return (
    <div className="sign-in">
      <h1 className="sign-in-title">Welcome to the Code Playground</h1>
      <span className="sign-in-subtitle">
        You can easily find React code examples here
      </span>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          required
          className="input"
          ref={userRef}
        />
        <input
          type="password"
          name="password"
          required
          className="input"
          ref={passwordRef}
        />
        <button type="submit" className="btn">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
