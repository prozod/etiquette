import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1em 0;
  margin: 0;
  font-family: "Work Sans", sans-serif;

  .productname {
    font-size: 0.9rem;
    margin-bottom: 2.5px;
  }

  .productprice {
    font-weight: 600;
  }
`;

export default function Item({ name, price, image }) {
  return (
    <Container>
      <img src={image} alt={name} />
      <p className="productname">{name}</p>
      <p className="productprice">${price}</p>
    </Container>
  );
}
