import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
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
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";

export default function NavContainer({
  position,
  logoColor,
  rightIcons,
  leftIcons,
  color,
  itemHoverLineColor,
  mobileMenuBackground,
  mobileMenuItemColor,
}) {
  let navDiv = useRef(null);
  useEffect(() => {
    gsap.to(navDiv, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: Power3.easeIn,
    });
  }, []);

  let [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", debounceHandleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", debounceHandleScroll);
    };
  });

  let lastPos = useRef();
  const scrollHandler = useCallback(() => {
    const currentPos = window.pageYOffset;
    const doc = document.body.querySelector("nav");

    if (currentPos <= 0) {
      if (scrolled) {
        setScrolled(false);
        doc.classList.remove("scroll_down");
      }
    }

    if (currentPos > lastPos.current && doc.classList.contains("scroll_down")) {
      if (scrolled) {
        setScrolled(false);
        doc.classList.remove("scroll_down");
      }
    }

    if (
      currentPos < lastPos.current &&
      !doc.classList.contains("scroll_down")
    ) {
      if (!scrolled) {
        setScrolled(true);
        doc.classList.add("scroll_down");
        doc.style.height = "fit-content";
      }
    }

    lastPos.current = currentPos;
  }, [scrolled]);

  const debounceHandleScroll = useMemo(
    () => debounce(scrollHandler, 100),
    [scrollHandler]
  );

  return (
    <Nav
      ref={(el) => {
        navDiv = el;
      }}
      // className={scrollHandler}
      position={position}
    >
      <NavItems>
        <NavDesktop
          leftIcons={leftIcons}
          itemHoverLineColor={itemHoverLineColor}
        />
        <Logo logoColor={logoColor} className="logo">
          <Link to="/">Etiquette</Link>
        </Logo>
        <NavButtons>
          <ButtonContainer rightIcons={rightIcons}>
            <a
              href="/"
              alt="User Profile"
              aria-label="User Profile"
              className="logo"
            >
              <User />
            </a>
            <a href="/" alt="Search" aria-label="Search">
              <Search />
            </a>
            <a href="/" alt="ShoppingCart" aria-label="Shopping Cart">
              <ShoppingBag />
            </a>
          </ButtonContainer>
        </NavButtons>
        <NavMobile
          color={color}
          mobileMenuBackground={mobileMenuBackground}
          mobileMenuItemColor={mobileMenuItemColor}
        />
      </NavItems>
    </Nav>
  );
}
