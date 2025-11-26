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
  const artworks = [{
    id: 1,
    title: "Kunstwerk 1",
    description: "Beschreibung für Kunstwerk 1",
    image: artwork1
  }, {
    id: 2,
    title: "Kunstwerk 2",
    description: "Beschreibung für Kunstwerk 2",
    image: artwork2
  }, {
    id: 3,
    title: "Kunstwerk 3",
    description: "Beschreibung für Kunstwerk 3",
    image: artwork3
  }, {
    id: 4,
    title: "Kunstwerk 4",
    description: "Beschreibung für Kunstwerk 4",
    image: artwork4
  }, {
    id: 5,
    title: "Kunstwerk 5",
    description: "Beschreibung für Kunstwerk 5",
    image: artwork5
  }, {
    id: 6,
    title: "Kunstwerk 6",
    description: "Beschreibung für Kunstwerk 6",
    image: artwork6
  }, {
    id: 7,
    title: "Kunstwerk 7",
    description: "Beschreibung für Kunstwerk 7",
    image: artwork7
  }, {
    id: 8,
    title: "Kunstwerk 8",
    description: "Beschreibung für Kunstwerk 8",
    image: artwork8
  }, {
    id: 9,
    title: "Kunstwerk 9",
    description: "Beschreibung für Kunstwerk 9",
    image: artwork9
  }, {
    id: 10,
    title: "Kunstwerk 10",
    description: "Beschreibung für Kunstwerk 10",
    image: artwork10
  }, {
    id: 11,
    title: "Kunstwerk 11",
    description: "Beschreibung für Kunstwerk 11",
    image: artwork11
  }, {
    id: 12,
    title: "Kunstwerk 12",
    description: "Beschreibung für Kunstwerk 12",
    image: artwork12
  }, {
    id: 13,
    title: "Kunstwerk 13",
    description: "Beschreibung für Kunstwerk 13",
    image: artwork13
  }, {
    id: 14,
    title: "Kunstwerk 14",
    description: "Beschreibung für Kunstwerk 14",
    image: artwork14
  }, {
    id: 15,
    title: "Kunstwerk 15",
    description: "Beschreibung für Kunstwerk 15",
    image: artwork15
  }, {
    id: 16,
    title: "Kunstwerk 16",
    description: "Beschreibung für Kunstwerk 16",
    image: artwork16
  }];
  return <section id="galerie" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 text-center">
          Galerie
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artworks.map(artwork => <Card key={artwork.id} className="group overflow-hidden border-border bg-card hover:bg-gallery-hover transition-all duration-300 cursor-pointer shadow-sm hover:shadow-elegant">
              <div className="aspect-[3/4] bg-muted flex items-center justify-center relative overflow-hidden">
                <img src={artwork.image} alt={artwork.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                
                
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Gallery;