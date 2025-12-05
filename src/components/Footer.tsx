import { BookOpen, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-primary" />
            <span className="font-serif text-xl font-semibold text-foreground">
              The Turning Page
            </span>
          </div>

          {/* Tagline */}
          <p className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for book lovers
          </p>

          {/* Year */}
          <p className="text-sm text-muted-foreground font-sans">
            © {new Date().getFullYear()} The Turning Page Book Club
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
