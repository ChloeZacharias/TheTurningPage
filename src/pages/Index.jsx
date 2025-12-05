import React from "react";
import Hero from "../components/Hero.jsx";
import BookGrid from "../components/BookGrid.jsx";
import Footer from "../components/Footer.jsx";

const Index = () => {
  return (
    <main className="main">
      <Hero />
      <BookGrid />
      <Footer />
    </main>
  );
};

export default Index;
