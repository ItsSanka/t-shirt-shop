import React from "react";
import NavBar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/HeroSection/Hero";
import Product from "../../Components/ProductSection/Product";

function Home() {
  return (
    <div>
      <section className="hero-section bg-hero-pattern bg-no-repeat bg-cover">
        <div className="container">
          <NavBar></NavBar>
          <Hero></Hero>
        </div>
      </section>
      <div className="container py-5">
        <Product></Product>
      </div>
      <div className="container pb-5">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
