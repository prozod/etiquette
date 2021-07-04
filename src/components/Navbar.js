import React from "react";
import {
  Nav,
  MenuItems,
  Item,
  NavItems,
  Logo,
  NavButtons,
  ButtonContainer,
} from "../styles/Navbar.style";

import { User, Search, ShoppingBag } from "react-feather";

export default function NavContainer() {
  return (
    <Nav>
      <NavItems>
        <MenuItems>
          <Item>Shop</Item>
          <Item>Lookbook</Item>
          <Item>About</Item>
          <Item>Story</Item>
        </MenuItems>
        <Logo>Etiquette</Logo>
        <NavButtons>
          <ButtonContainer>
            <User />
            <Search />
            <ShoppingBag />
          </ButtonContainer>
        </NavButtons>
      </NavItems>
    </Nav>
  );
}
