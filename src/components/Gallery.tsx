import { Card } from "@/components/ui/card";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";
import artwork6 from "@/assets/artwork-6.jpg";
import artwork7 from "@/assets/artwork-7.jpg";
import artwork8 from "@/assets/artwork-8.jpg";
import artwork9 from "@/assets/artwork-9.jpg";
import artwork10 from "@/assets/artwork-10.jpg";
import artwork11 from "@/assets/artwork-11.jpg";
import artwork12 from "@/assets/artwork-12.jpg";
import artwork13 from "@/assets/artwork-13.jpg";
import artwork14 from "@/assets/artwork-14.jpg";
import artwork15 from "@/assets/artwork-15.jpg";
import artwork16 from "@/assets/artwork-16.jpg";

const Gallery = () => {
  const artworks = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    title: `Kunstwerk ${i + 1}`,
  }));

  const artworkImages = [
    artwork1, artwork2, artwork3, artwork4, artwork5,
    artwork6, artwork7, artwork8, artwork9, artwork10,
    artwork11, artwork12, artwork13, artwork14, artwork15, artwork16
  ];

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
                <img 
                  src={artworkImages[artwork.id - 1]} 
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
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
