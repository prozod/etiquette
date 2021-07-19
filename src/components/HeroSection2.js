import React from "react";
import styled from "styled-components";
import heroSection2 from "../images/heroSection2.jpg";
import Button from "./Button";

const Container = styled.section`
  min-height: 668px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-image: url(${heroSection2});
  background-size: cover;
  margin-top: 8em;
  margin-bottom: 3em;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  div {
    z-index: 10;
    width: 80%;
    height: 100%;
    flex: 1;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-family: "Prata", serif;
      color: white;
      font-size: 3rem;
      font-weight: 200;
    }

    p {
      font-family: "Work Sans", serif;
      color: white;
    }

    button {
      display: flex;
      width: fit-content;
      height: fit-content;
      margin-top: 1em;
      transition: all 0.2s ease-in-out;
      position: relative;

      &:before {
        content: "";
        background-color: white;
        width: 0%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.2s ease-in-out;
      }

      &:hover::before {
        width: 100%;
        opacity: 1;
        transform: scale(1);
        transition: all 0.2s ease-in-out;
      }

      &:hover {
        color: black;
        transition-delay: 0.2s;
      }
    }
  }
`;

export default function HeroSection2() {
  return (
    <Container>
      <div>
        <h1>Classic Perfection</h1>
        <p>Each piece is lovingly handmade in our studio warehouse.</p>
        <Button color="white" background="transparent" border="1px solid white">
          PURCHASE NOW
        </Button>
      </div>
    </Container>
  );
}
