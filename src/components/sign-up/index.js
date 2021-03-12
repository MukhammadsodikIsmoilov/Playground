import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Container, Header, Form, Input, Button } from "../sign-in/style";
import { useAuth } from "../../context/auth";

const SignUp = () => {
  const { signup } = useAuth();
  const history = useHistory();
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordRef2 = useRef(null);

  const handleSubmit = () => {
    let username = usernameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    let password2 = passwordRef2.current.value;

    const clearFields = () => {
      username = "";
      email = "";
      password = "";
      password2 = "";
    };

    if(password === password2){
      
    }
  };

  return (
    <Container>
      <Header>
        Welcome to the Code Playground
        <span>
          You can find React code examples to practise and to enhance your
          knowledge
        </span>
      </Header>

      <Form onSubmit={handleSubmit}>
        <Input type="text" name="username" required placeholder="Username..." />
        <Input type="email" name="email" required placeholder="Email..." />
        <Input
          type="password"
          name="password"
          required
          placeholder="Password..."
        />
        <Input
          type="password"
          name="password2"
          required
          placeholder="Re-type password..."
        />
        <Button type="button" onClick={() => history.push("/sign-in")}>
          Sign In
        </Button>
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
