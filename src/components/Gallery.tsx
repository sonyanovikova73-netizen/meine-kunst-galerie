import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Generate 20 placeholder items
  const artworks = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Kunstwerk ${i + 1}`,
  }));

  return (
    <section id="galerie" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 text-center">
          Galerie
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artworks.map((artwork) => (
            <Card
              key={artwork.id}
              className="group overflow-hidden border-border bg-card hover:bg-gallery-hover transition-all duration-300 cursor-pointer shadow-sm hover:shadow-elegant"
            >
              <div className="aspect-[3/4] bg-muted flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-accent/30" />
                <span className="relative text-muted-foreground font-light text-sm">
                  {artwork.title}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-light text-foreground">
                  {artwork.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  [Details hinzufügen]
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
