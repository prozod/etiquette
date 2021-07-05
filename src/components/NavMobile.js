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
  background-color: red;
  width: 100%;
  height: 100%;
`;

const ToggleButtons = styled.div`
  z-index: 99;
  position: relative;
`;

export default function NavMobile() {
  const [openMenu, setOpenMenu] = useState();

  const closedMenu = (
    <X size={32} color="white" onClick={() => setOpenMenu(!openMenu)} />
  );
  const openedMenu = (
    <Menu size={32} color="white" onClick={() => setOpenMenu(!openMenu)} />
  );

  const closeMobileMenu = () => setOpenMenu(false);

  return (
    <MobileContainer>
      <ToggleButtons>{openMenu ? closedMenu : openedMenu}</ToggleButtons>
      <Hamburger>
        {openMenu && (
          <NavItems isMobile={true} closeMobileMenu={closeMobileMenu} />
        )}
      </Hamburger>
    </MobileContainer>
  );
}
