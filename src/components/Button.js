import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Work Sans", sans-serif;

  background: none;
  border: none;
  padding: 15px 40px;
  font-size: 1.2rem;
  color: white;
  border: 2px solid white;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
