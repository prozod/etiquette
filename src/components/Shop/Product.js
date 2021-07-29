import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Truck, Box, CheckSquare } from "react-feather";
import SyncLoader from "react-spinners/SyncLoader";
import { Link } from "react-router-dom";
import {
  GlassMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";
import { v4 as uuidv4 } from "uuid";
import { API_URL, imageToUrl } from "../Utils/Urls";

const Container = styled.section`
  margin: 0 auto;
  margin-top: 103px;
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 3em 0;
  transition: all 0.2s ease;

  @media (max-width: 1400px) {
    width: 80%;
  }

  @media (max-width: 1024px) {
    width: 90%;
    flex-direction: column;
  }

  .loader {
    padding: 3em 0;
  }
`;

const ProductContainer = styled.div`
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  font-family: "Work Sans", sans-serif;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .separator {
    width: 100%;
    height: 1px;
    background-color: #e2e2e2;
    margin: 1em 0;
  }

  .rightside {
    max-width: 500px;
    width: 100%;
    flex: 1;
    img {
      max-height: auto;
      width: 100%auto;
      /* @media (max-width: 768px) {
        max-width: auto;
        max-height: auto;
      } */
    }
  }

  .leftside {
    margin: 0;
    padding: 0 20px;
    width: 50%;
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1024px) {
      width: 100%;
      padding: 20px 0;
    }

    .name {
      font-family: "Prata", sans-serif;
      font-weight: 400;
      font-size: 1.75rem;
    }

    .prices {
      display: flex;

      .price {
        font-size: 1.25rem;
        font-weight: 600;
        margin-left: 5px;
      }

      .discount:not(:empty) ~ .price {
        text-decoration: line-through;
      }

      .discount {
        color: #d75454;
        font-weight: 600;
        display: none;
        font-size: 1.25rem;

        flex-direction: column-reverse;

        &:before {
          content: "SALE";
          background-color: #d75454;
          color: white;
          padding: 0 5px;
          width: fit-content;
          border-radius: 5px;
          font-size: 0.75rem;
        }

        &:not(:empty) {
          display: flex;
        }
      }
    }

    .description {
      font-size: 0.75rem;
    }

    .specs {
      font-size: 0.75rem;
      font-weight: 600;
    }

    .services {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 10px 0;

      p {
        font-size: 0.75rem;
        margin-left: 10px;
      }
    }

    button {
      font-family: "Work Sans", serif;
      width: 100%;
      background: none;
      color: white;
      outline: none;
      border: none;
      padding: 10px 20px;
      border: 1px solid black;
      position: relative;
      transition: all 0.2s ease;
      cursor: pointer;

      &:before {
        content: "";
        background-color: black;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 1;
        transition: all 0.2s ease-in-out;
      }

      &:hover::before {
        width: 0%;
        opacity: 0;
        transition: all 0.2s ease-in-out;
      }

      &:hover {
        color: black;
        transition-delay: 0.2s;
        background-color: transparent;
      }
    }

    .help {
      font-size: 0.75rem;
      display: flex;
      flex-direction: column;
      margin: 1em 0px 3px 0px;

      span {
        font-weight: 600;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
`;

const RecommendedContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 7em;
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Work Sans", serif;

  p {
    font-weight: 600;
    margin: 0.5em 0;
  }

  .recommendedproducts {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    @media (max-width: 1024px) {
      justify-content: center;
    }
  }
  a {
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }

  .product {
    margin: 0.5em 0;
    margin-right: 7px;
    width: fit-content;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(0.95);
    }

    img {
      border-radius: 5px;
      max-width: 220px;
      width: 100%;
      height: 100%;
      position: relative;
    }

    p {
      font-size: 0.9rem;
      font-weight: 400;
      margin: 0;
    }
  }
`;

export default function Product() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [recommended, setRecommended] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch(`${API_URL}/products/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setProducts(data.find((product) => product.url === id));
        }
      })
      .catch((err) => console.error(err));

    return () => {
      isMounted = false;
    };
  }, [id]);

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
          setRecommended(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container>
      {products.length === 0 || products === undefined ? (
        <div className="loader">
          <SyncLoader size={30} loading={loading} />
        </div>
      ) : (
        <ProductContainer>
          <div className="rightside">
            <GlassMagnifier
              imageSrc={
                `${process.env.REACT_APP_API_URL}` +
                products?.image_showcase?.url
              }
              imageAlt={products.name}
              largeImageSrc={URL + products?.image_showcase?.url}
              mouseActivation={MOUSE_ACTIVATION.CLICK}
              touchActivation={TOUCH_ACTIVATION.TAP}
              magnifierBorderColor="rgba(255, 255, 255, .5)"
              magnifierBorderSize={2}
              magnifierSize="200px"
            />
          </div>
          <div className="leftside">
            <div>
              <h1 className="name">{products.name}</h1>
              <div className="prices">
                {products.discounted_price !== null ? (
                  <p className="discount">
                    ${Number(products?.discounted_price).toFixed(2)}
                  </p>
                ) : (
                  <></>
                )}
                <p className="price">${products.price.toFixed(2)}</p>
              </div>
              <div className="separator"></div>
              <p className="description">{products.description}</p>
              <div className="separator"></div>
              {products.specs
                ?.split("-")
                .slice(1)
                .map((prod, i) => {
                  return (
                    <p className="specs" key={uuidv4()}>
                      &mdash; {prod}
                    </p>
                  );
                })}
              <div className="separator"></div>
              <div>
                <div className="services">
                  <Truck size={24} />
                  <p>Free Expedited Shipping with orders over $149.00+</p>
                </div>

                <div className="services">
                  <Box size={24} />
                  <p>
                    Free extended 60 Day Returns (
                    <a href="/shop" alt="#">
                      Terms & Conditions apply
                    </a>
                    ).
                  </p>
                </div>

                <div className="services">
                  <CheckSquare size={24} />
                  <p>2 Year Warranty</p>
                </div>
              </div>
            </div>
            <button>ADD TO BAG</button>
            <div className="help">
              Need product help?{" "}
              <span>Chat with one of our professional stylists now!</span>
            </div>
          </div>
        </ProductContainer>
      )}

      <RecommendedContainer>
        <p>You might also like</p>
        <div className="recommendedproducts">
          {recommended.length === 0 ? (
            <div className="loader">
              <SyncLoader size={30} loading={loading} />
            </div>
          ) : (
            recommended
              .slice(Math.random() * recommended.length, recommended.length)
              .slice(0, 5)
              .map((product) => (
                <Link to={`/shop/product/${product.url}`} key={uuidv4()}>
                  <div className="product">
                    <img
                      src={`${imageToUrl(product.image)}`}
                      alt={product.name}
                    />
                    <p>{product.name}</p>
                  </div>
                </Link>
              ))
          )}
        </div>
      </RecommendedContainer>
    </Container>
  );
}
