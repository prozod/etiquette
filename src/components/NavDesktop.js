import React from "react";
import NavItems from "./NavItems";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 990px) {
    display: none;
  }
`;

export default function NavDesktop() {
  return (
    <Container>
      <NavItems />
    </Container>
  );
}
