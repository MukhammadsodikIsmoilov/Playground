import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Header = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 700;

  span {
    display: block;
    font-size: 18px;
    font-weight: 400;
    margin: 5px 0 10px;
  }
`;

export const Form = styled.form`
  /* border: 1px solid #666; */
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 5px 10px;
  margin: 15px 0;
  border: 1px solid #333;
  font-size: 18px;
  outline: none;
`;

export const Button = styled.button`
  border: 1px solid transparent;
  outline: none;
  background-color: #333;
  color: #fff;

  &:hover {
    background-color: #fff;
    border: 1px solid #333;
    color: #333;
  }
`;
