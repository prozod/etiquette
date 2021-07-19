import React from "react";
import styled from "styled-components";
import Button from "./Button";
import img1 from "../images/img1AboutHero.jpg";
import img2 from "../images/img2AboutHero.jpg";

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
  margin-top: 5em;
  margin-bottom: 5em;

  @media (max-width: 990px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 3em;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0;

  @media (max-width: 990px) {
    width: 80%;
  }

  h1 {
    font-family: "Prata", serif;
    font-size: 3rem;
    font-weight: 200;

    @media (max-width: 1024px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-family: "Work Sans", serif;
    font-size: 1rem;

    @media (max-width: 1024px) {
      font-size: 0.9rem;
    }
  }

  div {
    max-width: 530px;
    margin-bottom: 3em;
  }

  button {
    margin-bottom: 3em;
  }
`;

const RightSide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
  margin: 0;
  padding: 0;
  width: 70%;
  height: auto;
  margin-left: 10px;

  @media (max-width: 990px) {
    width: 80%;
    justify-content: space-between;
  }

  img {
    max-width: 50%;
    background-size: contain;
    transition: all 0.2s ease;

    &:nth-child(1) {
      position: absolute;
      right: 270px;
      top: 50px;

      @media (max-width: 1500px) {
        right: 200px;
      }

      @media (max-width: 1100px) {
        right: 170px;
      }

      @media (max-width: 990px) {
        position: relative;
        right: 0;
        top: 0;
      }
    }
  }
`;

export default function AboutHero() {
  return (
    <Container>
      <LeftSide>
        <div>
          <h1>Humble & Luxurious</h1>
          <p>
            Etiquette is a new luxury jewelry brand designed and developed for a
            young & flourishing generation.
          </p>
        </div>
        <div>
          <h1>Uniquely yours</h1>
          <p>
            All of our jewelry is handmade in small batches. Each piece is
            unique. Our collection is restocked, only seasonal collections &
            favourites are kept. The rest will always be new designs.
          </p>
        </div>
        <Button color="white" background="black" border="none">
          LEARN MORE
        </Button>
      </LeftSide>
      <RightSide>
        <img src={img1} alt="NecklaceShowcase" />
        <img src={img2} alt="NecklaceShowcase" />
      </RightSide>
    </Container>
  );
}
