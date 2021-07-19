import React, { useRef, useEffect } from "react";
import {
  HeroContainer,
  HeroMotto,
  HeroBackground,
  HeroSocials,
} from "../styles/Hero.style";
import Etiquette from "../videos/etiquettepxl.mp4";
import Button from "./Button";
import { Instagram, Twitter, MessageCircle } from "react-feather";
import { gsap, Power3 } from "gsap";

export default function Hero() {
  let heroFadeIn = useRef(null);

  useEffect(() => {
    gsap.to(heroFadeIn, {
      duration: 0.5,
      y: 0,
      opacity: 1,
      ease: Power3.easeIn,
      delay: 0.2,
    });
  }, []);

  return (
    <HeroContainer>
      <HeroMotto>
        <p
          ref={(el) => {
            heroFadeIn = el;
          }}
        >
          Fresh accessories for a <br />
          brand new season.
        </p>
        <Button color="white" background="transparent" border="2px solid white">
          OUR COLLECTION
        </Button>
      </HeroMotto>
      <HeroSocials>
        <a href="/" target="_blank">
          <MessageCircle />
        </a>
        <div></div>
        <a href="/" target="_blank">
          <Twitter />
        </a>
        <div></div>
        <a href="/" target="_blank">
          <Instagram />
        </a>
      </HeroSocials>
      <HeroBackground>
        <video width="100%" autoPlay loop muted>
          <source src={Etiquette} type="video/mp4" />
        </video>
      </HeroBackground>
    </HeroContainer>
  );
}
