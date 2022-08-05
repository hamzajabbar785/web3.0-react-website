import { useState } from "react";
import Contact from "./components/Contact";
import Customers from "./components/Customers";
import DevAPI from "./components/DevAPI";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <Products />
      <DevAPI />
      <Customers />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
