import React from "react";
import { Container, Filter, Products } from "../../styles/Shop.styles";
import Item from "./Item";
import shop1 from "../../images/products/shop1.jpg";

export default function Shop() {
  return (
    <Container>
      <div className="separator"></div>
      <div className="ourproducts">
        <h4>Our products</h4>
      </div>
      <div className="separator"></div>
      <Filter>
        <h4>Filter component goes here</h4>
      </Filter>
      <div className="separator"></div>
      <Products>
        <Item name="Ruby Crystal Ring" price="199.00" image={shop1} />
        <Item name="Ruby Crystal Ring" price="199.00" image={shop1} />
        <Item name="Ruby Crystal Ring" price="199.00" image={shop1} />
        <Item name="Ruby Crystal Ring" price="199.00" image={shop1} />
        <Item name="Ruby Crystal Ring" price="199.00" image={shop1} />
        <Item name="Ruby Crystal Ring" price="199.00" image={shop1} />
      </Products>
    </Container>
  );
}
