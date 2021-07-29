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
import { Link } from "react-router-dom";

export default function Hero() {
  let heroFadeIn = useRef(null);
  let buttonFadeIn = useRef(null);
  let divGrowth1 = useRef(null);
  let divGrowth2 = useRef(null);
  let twitter = useRef(null);
  let instagram = useRef(null);
  let messenger = useRef(null);

  useEffect(() => {
    const heroContent = [heroFadeIn, buttonFadeIn];
    gsap.to(heroContent, {
      duration: 0.5,
      y: 0,
      opacity: 1,
      ease: Power3.easeIn,
      delay: 0.5,
      stagger: 0.5,
    });

    const divGrowth = [divGrowth1, divGrowth2];
    gsap.to(divGrowth, {
      duration: 0.5,
      y: 0,
      height: "150px",
      opacity: 1,
      ease: Power3.easeIn,
      delay: 3,
    });

    const icons = [messenger, twitter, instagram];
    gsap.to(icons, {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      ease: Power3.easeIn,
      delay: 1.5,
      stagger: 0.5,
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
          Fresh accessories for a brand new season.
        </p>
        <Link to="/shop">
          <Button
            color="white"
            background="transparent"
            border="1px solid white"
            ref={(el) => {
              buttonFadeIn = el;
            }}
          >
            OUR COLLECTION
          </Button>
        </Link>
      </HeroMotto>
      <HeroSocials>
        <a
          aria-label="Messenger"
          href="https://whatsapp.com"
          target="_blank"
          alt="Messenger"
          ref={(el) => {
            messenger = el;
          }}
          rel="noreferrer"
        >
          <MessageCircle />
        </a>
        <div
          ref={(el) => {
            divGrowth1 = el;
          }}
        ></div>
        <a
          aria-label="Twitter"
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          alt="Twitter"
          ref={(el) => {
            twitter = el;
          }}
        >
          <Twitter />
        </a>
        <div
          ref={(el) => {
            divGrowth2 = el;
          }}
        ></div>
        <a
          aria-label="Instagram"
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          alt="Instagram"
          ref={(el) => {
            instagram = el;
          }}
        >
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
