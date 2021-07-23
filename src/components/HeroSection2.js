import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.section`
  min-height: ${(props) => props.minHeight};
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.img});
  background-size: cover;
  margin-top: 8em;
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
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 1;
        transition: all 0.2s ease-in-out;
      }

      &:hover::before {
        width: 0%;
        opacity: 0;
        transition: all 0.2s ease-in-out;
      }

      &:hover {
        color: white;
        transition-delay: 0.1s;
        background-color: transparent;
      }
    }
  }
`;

export default function HeroSection2({
  title,
  text,
  buttontext,
  bgimg,
  height,
}) {
  return (
    <Container img={bgimg} minHeight={height}>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <Button
          color="black"
          background="transparent"
          border="1px solid white"
          visible
        >
          {buttontext}
        </Button>
      </div>
    </Container>
  );
}
