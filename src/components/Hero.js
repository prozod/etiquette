import React from "react";
import {
  HeroContainer,
  HeroMotto,
  HeroBackground,
  HeroSocials,
} from "../styles/Hero.style";
import Etiquette from "../videos/etiquettepxl.mp4";
import Button from "./Button";
import { Instagram, Twitter, MessageCircle } from "react-feather";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroMotto>
        <p>
          Fresh accessories for a <br />
          brand new season.
        </p>
        <Button>OUR COLLECTION</Button>
      </HeroMotto>
      <HeroSocials>
        <span>
          <MessageCircle />
        </span>
        <div></div>
        <span>
          <Twitter />
        </span>
        <div></div>
        <span>
          <Instagram />
        </span>
      </HeroSocials>
      <HeroBackground>
        <video autoPlay loop muted>
          <source src={Etiquette} type="video/mp4" />
        </video>
      </HeroBackground>
    </HeroContainer>
  );
}
