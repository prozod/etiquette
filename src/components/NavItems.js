import styled from "styled-components";
import { useRef, useEffect } from "react";

import { gsap, Power3 } from "gsap";

export const MenuItems = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1;
  opacity: 0;
  transform: translateY(-100px);

  @media (max-width: 990px) {
    flex-direction: column;
    background-color: #202020;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 2em 4em;
    height: fit-content;
  }
`;

export const MobileExtraItems = styled.div`
  margin: 0;
  padding: 0;
  display: none;
  flex: 1;

  @media (max-width: 990px) {
    flex-direction: column;
    display: flex;
  }
`;

export const Item = styled.p`
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: white;

  @media (max-width: 990px) {
    width: fit-content;
  }

  &:nth-child(-n + 5)::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background: #fff;
    transition: width 0.3s;

    @media (max-width: 990px) {
      display: none;
    }
  }

  &:nth-child(-n + 5):hover::after {
    width: 100%;
  }

  &:nth-child(-n + 5) {
    margin-right: 2em;

    @media (max-width: 990px) {
      margin-bottom: 0.4em;
      font-weight: 500;
      font-size: 1.2rem;
      text-transform: uppercase;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

const NavItems = ({ isMobile, closeMobileMenu }) => {
  let navDiv = useRef(null);

  useEffect(() => {
    gsap.to(navDiv, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
    });
  }, []);
  console.log(navDiv);

  return (
    <MenuItems
      ref={(el) => {
        navDiv = el;
      }}
    >
      <MobileExtraItems>
        <Item onClick={() => isMobile && closeMobileMenu()}>Account</Item>
        <Item onClick={() => isMobile && closeMobileMenu()}>Search</Item>
        <Item onClick={() => isMobile && closeMobileMenu()}>Shopping Cart</Item>
      </MobileExtraItems>
      <Item onClick={() => isMobile && closeMobileMenu()}>Shop</Item>
      <Item onClick={() => isMobile && closeMobileMenu()}>Lookbook</Item>
      <Item onClick={() => isMobile && closeMobileMenu()}>About</Item>
      <Item onClick={() => isMobile && closeMobileMenu()}>Story</Item>
    </MenuItems>
  );
};

export default NavItems;
