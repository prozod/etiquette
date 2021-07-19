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
  z-index: 15;
  opacity: 0;
  transform: translateY(-150px);
`;

export const NavItems = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0px;

  @media (max-width: 990px) {
    width: 90%;
  }
`;

export const Logo = styled.h3`
  margin: 0;
  padding: 0;
  flex: 1;
  color: white;
  text-align: center;
  font-family: "Prata", serif;
  font-weight: 200;
  font-size: 2.5rem;
  width: fit-content;

  @media (max-width: 990px) {
    font-size: 1.8rem;
    flex: 0;
  }
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

  @media (max-width: 990px) {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
