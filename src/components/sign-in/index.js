import { useRef } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { Container, Header, Form, Input, Button } from "./style";
import { useAuth } from "../../context/auth";

const SignIn = () => {
  const { signin, users } = useAuth();
  const history = useHistory();
  const userRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let username = userRef.current.value;
    let password = passwordRef.current.value;

    const clearFields = () => {
      username = "";
      password = "";
    };

    if (username.length > 2 && password.length > 5) {
      const user = users.find(
        (user) =>
          (user.name === username || user.email === username) &&
          user.password === password
      );
      if (user) {
        Cookies.set("user", JSON.stringify(user));
        signin(user.id);
        history.push("/");
        clearFields();
        console.log("The user has been logged in");
      } else {
        console.log("You have no account");
      }
    } else {
      if (username.length < 3)
        console.info("Username must be at least 3 characters");
      else console.info(" Password must be at least 6 character");
    }
  };

  return (
    <Container>
      <Header>
        Sign In
        <span>
          You can find React code examples to practise and to enhance your
          knowledge
        </span>
      </Header>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          required
          placeholder="Username..."
          ref={userRef}
        />
        <Input
          type="password"
          name="password"
          required
          placeholder="Password..."
          ref={passwordRef}
        />
        <Button type="button" onClick={() => history.push('/sign-up')}>Sign Up</Button>
        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
