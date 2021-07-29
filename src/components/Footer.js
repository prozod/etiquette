import React from "react";
import styled from "styled-components";
import visa from "../images/payments/visa.svg";
import paypal from "../images/payments/paypal.svg";
import amex from "../images/payments/amex.svg";
import mastercard from "../images/payments/mastercard.svg";

const Container = styled.footer`
  display: flex;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.img});
  width: 100%;
  min-height: 720px;
  flex: 1;
  font-family: "Work Sans", sans-serif;
`;

const Splitter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin: 0 auto;
  width: ${(props) => props.width};
  padding: 2.5em 0;

  @media (max-width: 1300px) {
    width: 80%;
  }
`;

const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: #5b5b5b;
  height: 100%;
  flex: 1;

  // hide label but keep it there for screenreaders
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .newsletter-text-title {
    letter-spacing: 3px;
    font-weight: 600;
    font-size: 1.5rem;
  }

  p {
    width: 30%;

    @media (max-width: 1024px) {
      width: 100%;
      font-size: 1rem;
    }
  }

  div {
    border: 1px solid #5b5b5b;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    width: fit-content;
    height: fit-content;
    margin-top: 1em;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    textarea {
      background: none;
      width: 100%;
      resize: none;
      border: none;
      font-family: "Work Sans", sans-serif;
      font-weight: 500;
      font-size: 1rem;
      padding: 0px 10px;
      padding-top: 15px;
      outline: none;
      color: #5b5b5b;
      display: flex;
      justify-content: center;
      align-items: center;

      &:focus {
        outline: 2px solid #5b5b5b;
      }
    }

    button {
      background: #5b5b5b;
      color: white;
      padding: 16px 42px;
      border: none;
      font-family: "Work Sans", sans-serif;
      font-weight: 500;
      font-size: 1rem;
      cursor: pointer;
    }
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #5b5b5b;
  font-family: "Work Sans", sans-serif;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    font-size: 0.85rem;
    font-weight: 400;

    @media (max-width: 1024px) {
      margin-bottom: 2em;
    }
  }

  .links {
    display: flex;
    margin: 0 0.5em;

    @media (max-width: 1024px) {
      flex-direction: column;
      margin: 0;
      margin-bottom: 2em;
    }
    a {
      color: #5b5b5b;
      text-decoration: none;
      font-size: 0.85rem;
      position: relative;

      &:nth-child(n) {
        margin-right: 1em;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .payments {
    img {
      &:nth-child(n) {
        margin-right: 5px;
      }
    }
  }
`;

export default function Footer({ bgimg, width }) {
  return (
    <Container img={bgimg}>
      <Splitter width={width}>
        <Newsletter>
          <p className="newsletter-text-title">Newsletter</p>
          <p>
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <div>
            <label htmlFor="newsletter">Newsletter</label>
            <textarea
              name="newsletter"
              id="newsletter"
              aria-labelledby="newsletter"
            ></textarea>

            <button>JOIN</button>
          </div>
        </Newsletter>

        <FooterContainer>
          <p>© ANDREAS WOLFF 2021</p>
          <div className="links">
            <a href="/" alt="privacy&cookies">
              Privacy & Cookies
            </a>
            <a href="/" alt="accessibility">
              Accessibility
            </a>
            <a href="/" alt="FAQ">
              FAQ
            </a>
            <a href="/" alt="Delivery&Returns">
              Delivery & Returns
            </a>
            <a href="/" alt="help">
              Help
            </a>
            <a href="/" alt="gift-vouchers">
              Gift vouchers
            </a>
            <a href="/" alt="careers">
              Careers at Etiquette
            </a>
          </div>

          <div className="payments">
            <img width="40px" height="30px" src={visa} alt="visa" />
            <img width="40px" height="30px" src={paypal} alt="paypal" />
            <img width="40px" height="30px" src={mastercard} alt="mastercard" />
            <img width="40px" height="30px" src={amex} alt="amex" />
          </div>
        </FooterContainer>
      </Splitter>
    </Container>
  );
}
