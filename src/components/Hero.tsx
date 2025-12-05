import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToBooks = () => {
    const booksSection = document.getElementById("books");
    if (booksSection) {
      booksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warm-glow/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-sans">
            Est. 2024
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Main Title */}
        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] opacity-0 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          The Turning
          <span className="block text-gradient">Page</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans opacity-0 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          A community of readers exploring stories together. Join us as we discover
          new worlds, one chapter at a time.
        </p>

        {/* Decorative books illustration */}
        <div
          className="mt-12 flex items-end justify-center gap-2 opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-primary/30 to-accent/30 rounded-t-sm"
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group opacity-0 animate-fade-in"
        style={{ animationDelay: "800ms" }}
      >
        <span className="text-sm font-sans tracking-wide">Explore our collection</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
