import React from "react";
import { BookOpen, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Logo */}
          <div className="footer__logo">
            <BookOpen />
            <span>The Turning Page</span>
          </div>

          {/* Tagline */}
          <p className="footer__tagline">
            Made with <Heart /> for book lovers
          </p>

          {/* Year */}
          <p className="footer__copyright">
            © {new Date().getFullYear()} The Turning Page Book Club
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
