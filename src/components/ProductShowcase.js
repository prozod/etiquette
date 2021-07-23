import React, { useRef } from "react";
import styled from "styled-components";
import { ShoppingCart } from "react-feather";
import product1 from "../images/products/product1.jpg";
import product2 from "../images/products/product2.jpg";
import product3 from "../images/products/product3.jpg";
import product4 from "../images/products/product4.jpg";
import product5 from "../images/products/product5.jpg";
import product6 from "../images/products/product6.jpg";
import gsap from "gsap";
import { useIntersection } from "react-use";

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  img {
    width: 100%;
    height: auto;
    max-width: 635px;
    max-height: 633px;
    position: relative;
    transition: all 0.2s ease;
  }
`;

const Item = styled.div`
  overflow: hidden;
  position: relative;

  div {
    padding: 1.5em 2em;
    font-family: "Work Sans", sans-serif;
    display: flex;
    justify-content: space-between;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 90%;
      padding: 1.5em 1.5em;
    }

    .itemTag {
      p {
        font-weight: 400;

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }

      h4 {
        font-weight: 600;
      }
    }

    .addToCart {
      padding: 10px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #f0f0f0;
        cursor: pointer;
      }
    }
  }
`;

export default function ProductShowcase() {
  const staggerIn = useRef(null);

  const intersection = useIntersection(staggerIn, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  const fadeIn = (element) => {
    gsap.to(element, {
      duration: 0.3,
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
      duration: 0.3,
      opacity: 0,
      scale: 0.5,
      ease: "power4.out",
      stagger: {
        amount: 0.5,
      },
    });
  };
  if (document.querySelector(".elementFade")) {
    intersection && intersection.intersectionRatio < 0.2
      ? fadeOut(".elementFade")
      : fadeIn(".elementFade");
  }

  return (
    <Container ref={staggerIn}>
      <Item className="elementFade">
        <img src={product1} alt="necklace" />
        <div>
          <span className="itemTag">
            <p>Adeline Hanging Studs in Gold</p>
            <h4>$125.00</h4>
          </span>
          <span className="addToCart">
            <ShoppingCart color="#363636" />
          </span>
        </div>
      </Item>

      <Item className="elementFade">
        <img src={product2} alt="necklace" />
        <div>
          <span className="itemTag">
            <p>Peon Cheeks in Glittery Gold</p>
            <h4>$90.00</h4>
          </span>
          <span className="addToCart">
            <ShoppingCart color="#363636" />
          </span>
        </div>
      </Item>

      <Item className="elementFade">
        <img src={product3} alt="necklace" />
        <div>
          <span className="itemTag">
            <p>Monroe's Charms in Gold</p>
            <h4>$105.00</h4>
          </span>
          <span className="addToCart">
            <ShoppingCart color="#363636" />
          </span>
        </div>
      </Item>

      <Item className="elementFade">
        <img src={product4} alt="necklace" />
        <div>
          <span className="itemTag">
            <p>Aurora 24K Trinity Ring</p>
            <h4>$899.00</h4>
          </span>
          <span className="addToCart">
            <ShoppingCart color="#363636" />
          </span>
        </div>
      </Item>

      <Item className="elementFade">
        <img src={product5} alt="necklace" />
        <div>
          <span className="itemTag">
            <p>Poesia Crescendo in Gold</p>
            <h4>$105.00</h4>
          </span>
          <span className="addToCart">
            <ShoppingCart color="#363636" />
          </span>
        </div>
      </Item>

      <Item className="elementFade">
        <img src={product6} alt="necklace" />
        <div>
          <span className="itemTag">
            <p>Ivonne Bonette MN 24K Gold</p>
            <h4>$310.00</h4>
          </span>
          <span className="addToCart">
            <ShoppingCart color="#363636" />
          </span>
        </div>
      </Item>
    </Container>
  );
}
