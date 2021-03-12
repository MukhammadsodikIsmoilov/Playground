import { useRef } from "react";
import {
  Container,
  ColorContainer,
  FormContainer,
  TextInput,
  ColorInput,
  Button,
} from "./style";

const Colors = () => {
  const titleRef = useRef("");
  const colorRef = useRef("");

  const addColor = () => {
      
  }

  return (
    <Container>
      <ColorContainer></ColorContainer>
      <FormContainer>
        <TextInput ref={titleRef} placeholder="color title..." required />
        <ColorInput ref={colorRef} required />
        <Button>ADD</Button>
      </FormContainer>
    </Container>
  );
};

export default Colors;
