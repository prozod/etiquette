import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { Link } from "react-router-dom";

export const MenuItems = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1;
  opacity: 1;
  justify-content: center;

  @media (max-width: 990px) {
    flex-direction: column;
    background-color: ${(props) => props.mobileMenuBackground};
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 2em 4em;
    height: fit-content;
    transform: translateX(-100vw);
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
  margin: 0;
  padding: 0;

  @media (max-width: 990px) {
    width: fit-content;
  }
  // navbar underline animation
  a {
    text-decoration: none;
    color: ${(props) => props.leftIcons};
  }

  &:nth-child(-n + 5)::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background: ${(props) => props.itemHoverLineColor};
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

const NavItems = ({
  state,
  leftIcons,
  itemHoverLineColor,
  mobileMenuBackground,
  mobileMenuItemColor,
}) => {
  // dom ref nodes for gsap animations
  let menu = useRef(null);
  let anchor1 = useRef(null);
  let anchor2 = useRef(null);
  let anchor3 = useRef(null);
  let anchor4 = useRef(null);
  let anchor5 = useRef(null);
  let anchor6 = useRef(null);
  let anchor7 = useRef(null);

  useEffect(() => {
    if (state !== undefined) {
      if (state.clicked === false || state.clicked === null) {
        //closemenu
        gsap.to(
          [menu, anchor1, anchor2, anchor3, anchor4, anchor5, anchor6, anchor7],
          {
            duration: 0.5,
            x: "-100vh",
            ease: Power3.out,
            stagger: {
              from: "center",
              amount: 0.2,
            },
          }
        );
      } else if (
        state.clicked === true ||
        (state.clicked === true && state.initial === null)
      ) {
        gsap.to(
          [menu, anchor1, anchor2, anchor3, anchor4, anchor5, anchor6, anchor7],
          {
            duration: 0.5,
            x: "0",
            ease: Power3.out,
            stagger: {
              amount: 0.2,
            },
          }
        );
      }
    }
  });

  return (
    <MenuItems
      ref={(el) => (menu = el)}
      className="animation"
      mobileMenuBackground={mobileMenuBackground}
      mobileMenuItemColor={mobileMenuItemColor}
    >
      <MobileExtraItems>
        <Item
          ref={(el) => (anchor1 = el)}
          leftIcons={leftIcons}
          itemHoverLineColor={itemHoverLineColor}
        >
          <Link to="/">Account</Link>
        </Item>
        <Item
          ref={(el) => (anchor2 = el)}
          leftIcons={leftIcons}
          itemHoverLineColor={itemHoverLineColor}
        >
          <Link to="/">Search</Link>
        </Item>
        <Item
          ref={(el) => (anchor3 = el)}
          leftIcons={leftIcons}
          itemHoverLineColor={itemHoverLineColor}
        >
          <Link to="/">Shopping Cart</Link>
        </Item>
      </MobileExtraItems>
      <Item
        ref={(el) => (anchor4 = el)}
        leftIcons={leftIcons}
        itemHoverLineColor={itemHoverLineColor}
      >
        <Link to="/shop" className="anchortag">
          Shop
        </Link>
      </Item>
      <Item
        ref={(el) => (anchor5 = el)}
        leftIcons={leftIcons}
        itemHoverLineColor={itemHoverLineColor}
      >
        <Link to="/" className="anchortag">
          Lookbook
        </Link>
      </Item>
      <Item
        ref={(el) => (anchor6 = el)}
        leftIcons={leftIcons}
        itemHoverLineColor={itemHoverLineColor}
      >
        <Link to="/" className="anchortag">
          About
        </Link>
      </Item>
      <Item
        ref={(el) => (anchor7 = el)}
        leftIcons={leftIcons}
        itemHoverLineColor={itemHoverLineColor}
      >
        <Link to="/" className="anchortag">
          Story
        </Link>
      </Item>
    </MenuItems>
  );
};

export default NavItems;
