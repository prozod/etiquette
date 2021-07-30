import styled from "styled-components";

export const Nav = styled.nav`
  position: ${(props) => props.position};
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
  transform: translate3d(0, -100%, 0);

  &.scroll_down {
    transition: all 0.3s ease-in-out;
    position: fixed;
    background-color: rgba(255, 255, 255, 1);
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.1));

    @media (max-width: 990px) {
      position: absolute;
      background-color: transparent;
    }

    a {
      color: black;

      @media (max-width: 990px) {
        color: white;
      }
    }

    .anchortag {
      color: black;

      &::after {
        content: "";
        display: block;
        width: 0;
        height: 1px;
        background: black;
        transition: width 0.3s;

        @media (max-width: 990px) {
          display: none;
        }
      }

      &:hover::after {
        width: 100%;
      }
    }

    h3 {
      color: black;
    }
  }
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

  a {
    text-decoration: none;
    color: ${(props) => props.logoColor};
  }

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

  a {
    margin: 0;
    padding: 0;
    transition: all 0.2s ease;
    text-decoration: none;
    color: ${(props) => props.rightIcons};

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
`;
