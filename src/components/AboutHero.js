import React, { useRef } from "react";
import styled from "styled-components";
import Button from "./Button";
import img1 from "../images/img1AboutHero.jpg";
import img2 from "../images/img2AboutHero.jpg";
import { useIntersection } from "react-use";
import gsap from "gsap";

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
    opacity: 0;

    @media (max-width: 1024px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-family: "Work Sans", serif;
    font-size: 1rem;
    opacity: 0;

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
    transition: all 0.2s ease;

    &:before {
      content: "";
      background-color: black;
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
      color: black;
      transition-delay: 0.2s;
      background-color: transparent;
    }
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
      z-index: 10;

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
  const fadeInRef = useRef(null);
  const fadeInTextContent = useRef(null);

  const intersection = useIntersection(fadeInRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });

  const fadeIn = (element) => {
    gsap.to(element, {
      duration: 0.2,
      opacity: 1,
      scale: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.5,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, {
      duration: 0.2,
      opacity: 0,
      scale: 0.5,
      ease: "power4.out",
      stagger: {
        amount: 0.5,
      },
    });
  };
  if (document.querySelector(".fadeIn")) {
    intersection && intersection.intersectionRatio < 0.6
      ? fadeOut(".fadeIn")
      : fadeIn(".fadeIn");
  }
  const intersectionText = useIntersection(fadeInTextContent, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  const fadeTextIn = (element) => {
    gsap.to(element, {
      duration: 0.3,
      x: 0,
      opacity: 1,
      ease: "power4.out",
      stagger: 0.2,
    });
  };
  const fadeTextOut = (element) => {
    gsap.to(element, {
      duration: 0.3,
      x: -100,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.2,
    });
  };
  if (document.querySelector(".textFadeIn")) {
    intersectionText && intersectionText.intersectionRatio < 0.3
      ? fadeTextOut(".textFadeIn")
      : fadeTextIn(".textFadeIn");
  }
  return (
    <Container>
      <LeftSide>
        <div>
          <h1 ref={fadeInTextContent} className="textFadeIn">
            Humble & Luxurious
          </h1>
          <p ref={fadeInTextContent} className="textFadeIn">
            Etiquette is a new luxury jewelry brand designed and developed for a
            young & flourishing generation.
          </p>
        </div>
        <div>
          <h1 ref={fadeInTextContent} className="textFadeIn">
            Uniquely yours
          </h1>
          <p ref={fadeInTextContent} className="textFadeIn">
            All of our jewelry is handmade in small batches. Each piece is
            unique. Our collection is restocked, only seasonal collections &
            favourites are kept. The rest will always be new designs.
          </p>
        </div>
        <Button
          color="white"
          background="transparent"
          border="1px solid black"
          visible
          ref={fadeInTextContent}
          className="textFadeIn"
        >
          LEARN MORE
        </Button>
      </LeftSide>
      <RightSide>
        <img
          src={img1}
          alt="NecklaceShowcase"
          className="fadeIn"
          ref={fadeInRef}
        />
        <img
          src={img2}
          alt="NecklaceShowcase"
          className="fadeIn"
          ref={fadeInRef}
        />
      </RightSide>
    </Container>
  );
}
