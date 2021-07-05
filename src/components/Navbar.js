import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap/all";
import {
  Nav,
  NavItems,
  Logo,
  NavButtons,
  ButtonContainer,
} from "../styles/Navbar.style";

import { User, Search, ShoppingBag } from "react-feather";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function NavContainer() {
  let navDiv = useRef(null);

  useEffect(() => {
    gsap.to(navDiv, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: Power3.easeIn,
    });
  }, []);

  return (
    <Nav
      ref={(el) => {
        navDiv = el;
      }}
    >
      <NavItems>
        <NavDesktop />
        <Logo>Etiquette</Logo>
        <NavButtons>
          <ButtonContainer>
            <User />
            <Search />
            <ShoppingBag />
          </ButtonContainer>
        </NavButtons>
        <NavMobile />
      </NavItems>
    </Nav>
  );
}
