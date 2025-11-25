const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg font-light tracking-wide hover:text-muted-foreground transition-colors"
          >
            [Ihr Name]
          </button>
          <div className="flex gap-8">
            <button
              onClick={() => scrollToSection("galerie")}
              className="text-sm font-light hover:text-muted-foreground transition-colors"
            >
              Galerie
            </button>
            <button
              onClick={() => scrollToSection("uber-mich")}
              className="text-sm font-light hover:text-muted-foreground transition-colors"
            >
              Über mich
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-sm font-light hover:text-muted-foreground transition-colors"
            >
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
