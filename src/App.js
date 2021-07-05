import { GlobalStyle } from "./styles/Global.style";
import NavContainer from "./components/Navbar";
import HeroContainer from "./components/Hero";
import AboutCards from "./components/AboutCards";

function App() {
  return (
    <div>
      <GlobalStyle whiteColor />
      <NavContainer />
      <HeroContainer />
      <AboutCards />
    </div>
  );
}

export default App;
