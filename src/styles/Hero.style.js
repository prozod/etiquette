import styled from "styled-components";

export const HeroContainer = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
`;

export const HeroBackground = styled.div`
  height: 100vh;
  width: 100vw;

  video {
    height: 100vh;
    object-position: top;
    object-fit: cover;
  }
`;

export const HeroMotto = styled.div`
  color: white;
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 3rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Work Sans", sans-serif;
  transition: all 0.3s ease;

  @media (max-width: 990px) {
    font-size: 2rem;
  }

  p {
    text-align: center;
    transform: translateY(50px);
    opacity: 0;
  }

  button {
    margin-top: 3em;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: white;
      color: #202020;
    }
  }
`;

export const HeroSocials = styled.div`
  height: 100%;
  color: white;
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 30px;

  a {
    margin: 10px 0;
    cursor: pointer;
    text-decoration: none;
    color: white;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  div {
    background: white;
    height: 150px;
    width: 1px;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;
