import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const HeroBackground = styled.div`
  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
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

  p {
    text-align: center;
  }

  button {
    margin-top: 3em;
    cursor: pointer;
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

  span {
    margin: 10px 0;
    cursor: pointer;
  }

  div {
    background: white;
    height: 150px;
    width: 1px;
  }
`;
