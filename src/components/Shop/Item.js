import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 1em 0;
  margin: 0;
  font-family: "Work Sans", sans-serif;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.95);
  }

  .productname {
    font-size: 0.9rem;
    margin-bottom: 2.5px;
  }

  .prices {
    display: flex;
  }

  .discount:not(:empty) ~ .price {
    text-decoration: line-through;
  }

  .discount {
    margin-right: 5px;
    color: #ca4545;
    font-weight: 600;
    display: none;
    flex-direction: column-reverse;

    &:before {
      content: "SALE";
      background-color: #ca4545;
      color: white;
      padding: 0 5px;
      border-radius: 5px;
      width: fit-content;

      font-size: 0.75rem;
    }

    &:not(:empty) {
      display: flex;
    }
  }
  .price {
    font-weight: 600;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  img {
    max-width: 250px;
    height: auto;
    width: 250px;
    height: 250px;
  }
`;

export default function Item({ name, price, image, url, discount }) {
  return (
    <Container>
      <Link to={url}>
        <img
          width="250px"
          height="250px"
          src={image}
          alt={name}
          loading="lazy"
        />
        <p className="productname">{name}</p>
        <div className="prices">
          <p className="discount">{discount}</p>
          <p className="price">${price}</p>
        </div>
      </Link>
    </Container>
  );
}
