import { GlobalStyle } from "./styles/Global.style";
import NavContainer from "./components/Navbar";
import HeroContainer from "./components/Hero";
import AboutCards from "./components/AboutCards";
import AboutHero from "./components/AboutHero";
import HeroSection2 from "./components/HeroSection2";
import ProductShowcase from "./components/ProductShowcase";
import heroSection2 from "./images/heroSection2.jpg";
import backtobasics from "./images/backtobasics.jpg";
import footer from "./images/footer.jpg";
import Footer from "./components/Footer";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle whiteColor />
        <Switch>
          <Route exact path="/">
            <NavContainer
              position="absolute"
              logoColor="white"
              rightIcons="white"
              leftIcons="white"
              color="white"
              itemHoverLineColor="white"
              mobileMenuBackground="#363636"
            />
            <HeroContainer />
            <AboutCards />
            <AboutHero />
            <HeroSection2
              bgimg={heroSection2}
              height="668px"
              title="Classic Perfection"
              text="Each piece is lovingly handmade in our studio warehouse."
              buttontext="PURCHASE NOW"
            />
            <ProductShowcase />

            <HeroSection2
              bgimg={backtobasics}
              height="400px"
              title="Back to Basics"
              text="Simple designs and extremely sturdy quality is what we go for. Over 24 collections, suited for everyone."
              buttontext="BROWSE NOW"
            />
            <Footer bgimg={footer} width="80%" />
          </Route>

          <Route path="/shop">
            <NavContainer
              position="relative"
              logoColor="black"
              rightIcons="black"
              leftIcons="black"
              color="black"
              itemHoverLineColor="black"
              mobileMenuBackground="white"
              mobileMenuItemColor="black"
            />
            <Shop />
            <Footer bgimg={footer} width="60%" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
