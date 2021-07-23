import styled from "styled-components";

const Button = styled.button`
  font-family: "Work Sans", sans-serif;
  background-color: ${(props) => props.background};
  border: none;
  padding: 15px 40px;
  font-size: 1.2rem;
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  cursor: pointer;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

export default Button;
