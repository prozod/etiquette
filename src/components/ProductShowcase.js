import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { ShoppingCart } from "react-feather";
import MoonLoader from "react-spinners/MoonLoader";
import gsap from "gsap";
import { useIntersection } from "react-use";
import { Link } from "react-router-dom";
import { API_URL, imageToUrl } from "./Utils/Urls";

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  align-items: flex-start;
  justify-content: center;

  a {
    text-decoration: none;
    color: black;
  }

  .loader {
    width: 99vw;
    overflow: hidden;
    height: 100%;
    margin: 0 auto;
    margin-top: 7em;
    padding: 1em 0;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Item = styled.div`
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: auto;
    max-width: 635px;
    max-height: 630px;
    position: relative;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(0.95) translate3d(0, -3%, 0);
      box-shadow: (10px, 15px, 15px, black);
    }
  }

  div {
    padding: 1.5em 2em;
    font-family: "Work Sans", sans-serif;
    display: flex;
    justify-content: space-between;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 90%;
      padding: 1.5em 1.5em;
    }

    .itemTag {
      .productname {
        font-weight: 400;
        font-size: 0.9rem;

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }

      .pricetag {
        font-weight: 600;
      }
    }

    .addToCart {
      padding: 10px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #f0f0f0;
        cursor: pointer;
      }
    }
  }
`;

export default function ProductShowcase() {
  const staggerIn = useRef(null);
  let [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch(`${API_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setProducts(data);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const intersection = useIntersection(staggerIn, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  const fadeIn = (element) => {
    gsap.to(element, {
      duration: 0.3,
      opacity: 1,
      scale: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.5,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, {
      duration: 0.3,
      opacity: 0,
      scale: 0.5,
      ease: "power4.out",
      stagger: {
        amount: 0.5,
      },
    });
  };
  if (document.querySelector(".elementFade")) {
    intersection && intersection.intersectionRatio < 0.2
      ? fadeOut(".elementFade")
      : fadeIn(".elementFade");
  }

  return (
    <Container ref={staggerIn}>
      {products.length === 0 ? (
        <div className="loader">
          <MoonLoader size={40} loading={loading} />
        </div>
      ) : (
        products.slice(8, 14).map((product) => (
          <Link to={`/shop/product/${product.url}`} key={product.name}>
            <Item className="elementFade">
              <img
                width="300px"
                height="300px"
                src={`${imageToUrl(product.image)}`}
                alt={product.name}
              />
              <div>
                <span className="itemTag">
                  <p className="productname">{product.name}</p>
                  <p className="pricetag">${product.price}</p>
                </span>
                <span className="addToCart">
                  <ShoppingCart color="#363636" />
                </span>
              </div>
            </Item>
          </Link>
        ))
      )}
    </Container>
  );
}
