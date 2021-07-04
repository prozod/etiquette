import { GlobalStyle } from "./styles/Global.style";
import NavContainer from "./components/Navbar";
import HeroContainer from "./components/Hero";

function App() {
  return (
    <div>
      <GlobalStyle whiteColor />
      <NavContainer />
      <HeroContainer />
    </div>
  );
}

export default App;
