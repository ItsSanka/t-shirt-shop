import React from 'react'
import NavBar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/HeroSection/Hero";

function ProductPage() {
  return (
    <div>
      <section className="hero-section bg-hero-pattern bg-no-repeat bg-cover">
        <div className="container">
          <NavBar></NavBar>
          <Hero></Hero>
        </div>
      </section>
      <div className="container py-5">
        <h2>Product</h2>
        <h3>Content coming soon</h3>
      </div>
      <div className="container pb-5">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default ProductPage
