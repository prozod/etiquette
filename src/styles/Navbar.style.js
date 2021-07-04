import styled from "styled-components";

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: "Work Sans", sans-serif;
  z-index: 30;
`;

export const NavItems = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

export const MenuItems = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1;
`;

export const Item = styled.p`
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: white;

  &:nth-child(-n + 3) {
    margin-right: 2em;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.h3`
  margin: 0;
  padding: 0;
  flex: 1;
  color: white;
  text-align: center;
  font-family: "Prata", serif;
  font-size: 2.4rem;
`;

export const NavButtons = styled.div`
  color: white;
  width: 250px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.div`
  color: white;
  width: 250px;
  display: flex;
  justify-content: space-evenly;

  &:hover {
    cursor: pointer;
  }
`;
