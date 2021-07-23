import styled from "styled-components";

export const Container = styled.section`
  margin: 0;
  padding: 0;
  height: 100%;
  margin: 0 auto;
  width: 60%;
  font-family: "Work Sans", sans-serif;
  margin-top: 104px;

  @media (max-width: 1024px) {
    width: 90%;
  }

  .separator {
    height: 1px;
    width: 100%;
    position: absolute;
    left: 0;
    background-color: #dadada;
  }

  .ourproducts {
    display: flex;
    h4 {
      padding: 1em 0;
      font-weight: 400;
      font-size: 2rem;
    }
  }
`;

export const Filter = styled.div`
  display: flex;
  padding: 1em 0;
  font-size: 1rem;
`;

export const Products = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 10px 5px;
  place-items: center;
  grid-auto-flow: auto;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 1em 0;
`;
