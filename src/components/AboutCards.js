import React from "react";
import styled from "styled-components";
import { Gift, Box, Truck } from "react-feather";

const CardContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1;
  margin: 0 auto;
  flex: 1;

  @media (max-width: 990px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 3;
  }
`;

const Card = styled.div`
  padding: 2em 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};

  @media (max-width: 990px) {
    padding: 2em 0;
  }

  div {
    width: 55%;
    text-align: center;

    @media (max-width: 990px) {
      width: 80%;
      justify-content: flex-start;
      align-items: flex-start;
    }

    /* @media (max-width: 1300px) {
      width: 75%;
    } */
  }

  h3 {
    font-family: "Prata", serif;
    font-size: 1.4rem;
    margin-bottom: 0.5em;
  }

  p {
    text-align: start;
    font-size: 0.9rem;
  }
`;

export default function AboutCards({ bgColor }) {
  return (
    <CardContainer>
      <ContainerContent>
        <Card bgColor={"#fff2de"}>
          <div>
            <Gift />
            <h3>Perfect gifts</h3>
            <p>
              Every piece of Falconette is beautifully wrapped. Each piece is a
              gift even if that gift is to yourself.
            </p>
          </div>
        </Card>

        <Card bgColor={"#DEFDFF"}>
          <div>
            <Box />
            <h3>Antique pieces</h3>
            <p>
              We’re keeping our promise. Each and every piece from us is unique.
              We make things that last for centuries, jewelry that gets
              inherited.
            </p>
          </div>
        </Card>

        <Card bgColor={"#FFEAEF"}>
          <div>
            <Truck />
            <h3>Free Shipping</h3>
            <p>
              Free shipping on all orders over $100. Pieces are shipped via next
              day delivery anywhere in the USA.
            </p>
          </div>
        </Card>
      </ContainerContent>
    </CardContainer>
  );
}
