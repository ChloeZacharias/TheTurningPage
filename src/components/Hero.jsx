import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToBooks = () => {
    const booksSection = document.getElementById("books");
    if (booksSection) {
      booksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      {/* Background decoration */}
      <div className="hero__background">
        <div className="hero__blob hero__blob--primary animate-float" />
        <div
          className="hero__blob hero__blob--accent animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div className="hero__blob hero__blob--center" />
      </div>

      {/* Content */}
      <div className="hero__content">
        {/* Decorative element */}
        <div className="hero__decorative animate-fade-in">
          <div className="hero__line" />
          <span className="hero__label">Est. 2025</span>
          <div className="hero__line hero__line--reverse" />
        </div>

        {/* Main Title */}
        <h1
          className="hero__title animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          The Turning
          <span className="text-gradient"> Page</span>
        </h1>

        {/* Subtitle */}
        <p
          className="hero__subtitle animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          A community of readers exploring stories together. Join us as we
          discover new worlds, one chapter at a time.
        </p>

        {/* Decorative books illustration */}
        <div
          className="hero__books-illustration animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="hero__book-spine"
              style={{
                width: `${20 + Math.random() * 15}px`,
                height: `${60 + i * 10}px`,
                transform: `rotate(${(i - 2) * 3}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToBooks}
        className="hero__scroll-indicator animate-fade-in"
        style={{ animationDelay: "800ms" }}
      >
        <span>Explore our books</span>
        <ChevronDown className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
