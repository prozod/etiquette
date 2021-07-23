import React, { useState } from "react";
import NavItems from "./NavItems";
import styled from "styled-components";
import { Menu, X } from "react-feather";

const MobileContainer = styled.nav`
  display: none;

  @media (max-width: 990px) {
    display: block;
  }
`;

const Hamburger = styled.div`
  width: 100%;
  height: 100%;

  a {
    color: ${(props) => props.mobileMenuItemColor};
  }
`;

const ToggleButtons = styled.div`
  z-index: 99;
  position: relative;
`;

export default function NavMobile({
  color,
  mobileMenuBackground,
  mobileMenuItemColor,
}) {
  const [menuOpen, setMenuOpen] = useState({
    initial: false,
    clicked: null,
    name: <X />,
  });

  const [disabled, setDisabled] = useState(false);

  //figure out if menu button should be disabled (to prevent spamming)
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };

  const menuAnimation = () => {
    disableMenu();
    if (menuOpen.initial === false) {
      setMenuOpen({
        initial: null,
        clicked: true,
        name: <X />,
      });
      console.log("1");
    } else if (menuOpen.clicked === true) {
      setMenuOpen({
        clicked: !menuOpen.clicked,
      });
      console.log("2");
    } else if (menuOpen.clicked === false) {
      setMenuOpen({
        clicked: !menuOpen.clicked,
      });
      console.log("3");
    }
  };

  return (
    <MobileContainer>
      <ToggleButtons>
        {menuOpen.clicked === false || menuOpen.clicked === null ? (
          <Menu color={color} disabled={disabled} onClick={menuAnimation} />
        ) : (
          <X color={color} disabled={disabled} onClick={menuAnimation} />
        )}
      </ToggleButtons>
      <Hamburger mobileMenuItemColor={mobileMenuItemColor}>
        <NavItems
          state={menuOpen}
          leftIcons="white"
          mobileMenuBackground={mobileMenuBackground}
        />
      </Hamburger>
    </MobileContainer>
  );
}
