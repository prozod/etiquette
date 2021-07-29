import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
      width: 90%;
    }

    h1 {
      font-weight: 400;
      margin-bottom: 10px;
    }

    h4 {
      font-weight: 400;
    }
  }
`;

export default function NotFound() {
  return (
    <Container>
      <div>
        <h1>Page not found.</h1>
        <h4>
          Please make sure that your connection is stable and the URL is
          correct.
        </h4>
        <h4>Try refreshing the page.</h4>
      </div>
    </Container>
  );
}
