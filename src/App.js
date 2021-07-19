import { GlobalStyle } from "./styles/Global.style";
import NavContainer from "./components/Navbar";
import HeroContainer from "./components/Hero";
import AboutCards from "./components/AboutCards";
import AboutHero from "./components/AboutHero";
import HeroSection2 from "./components/HeroSection2";

function App() {
  return (
    <div>
      <GlobalStyle whiteColor />
      <NavContainer />
      <HeroContainer />
      <AboutCards />
      <AboutHero />
      <HeroSection2 />
    </div>
  );
}

export default App;
