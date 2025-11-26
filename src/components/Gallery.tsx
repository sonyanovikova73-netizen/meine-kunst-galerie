import { useState } from 'react';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ZoomIn, ZoomOut } from 'lucide-react';
import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3 from '@/assets/artwork-3.jpg';
import artwork4 from '@/assets/artwork-4.jpg';
import artwork5 from '@/assets/artwork-5.jpg';
import artwork6 from '@/assets/artwork-6.jpg';
import artwork7 from '@/assets/artwork-7.jpg';
import artwork8 from '@/assets/artwork-8.jpg';
import artwork9 from '@/assets/artwork-9.jpg';
import artwork10 from '@/assets/artwork-10.jpg';
import artwork11 from '@/assets/artwork-11.jpg';
import artwork12 from '@/assets/artwork-12.jpg';
import artwork13 from '@/assets/artwork-13.jpg';
import artwork14 from '@/assets/artwork-14.jpg';
import artwork15 from '@/assets/artwork-15.jpg';
import artwork16 from '@/assets/artwork-16.jpg';
const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [artworks, setArtworks] = useState([
    {
      id: 1,
      title: 'BOBUR',
      description:
        'Bla bla bla. Sonja ist eine schöne Frau. Ich bin ein Mann. Wir sind zusammen. Wir sind glücklich. Wir sind in der Liebe. Ich möchte sie ficken.',
      image: artwork1,
    },
    {
      id: 2,
      title: 'Kunstwerk 2',
      description: 'Beschreibung für Kunstwerk 2',
      image: artwork2,
    },
    {
      id: 3,
      title: 'Kunstwerk 3',
      description: 'Beschreibung für Kunstwerk 3',
      image: artwork3,
    },
    {
      id: 4,
      title: 'Kunstwerk 4',
      description: 'Beschreibung für Kunstwerk 4',
      image: artwork4,
    },
    {
      id: 5,
      title: 'Kunstwerk 5',
      description: 'Beschreibung für Kunstwerk 5',
      image: artwork5,
    },
    {
      id: 6,
      title: 'Kunstwerk 6',
      description: 'Beschreibung für Kunstwerk 6',
      image: artwork6,
    },
    {
      id: 7,
      title: 'Kunstwerk 7',
      description: 'Beschreibung für Kunstwerk 7',
      image: artwork7,
    },
    {
      id: 8,
      title: 'Kunstwerk 8',
      description: 'Beschreibung für Kunstwerk 8',
      image: artwork8,
    },
    {
      id: 9,
      title: 'Kunstwerk 9',
      description: 'Beschreibung für Kunstwerk 9',
      image: artwork9,
    },
    {
      id: 10,
      title: 'Kunstwerk 10',
      description: 'Beschreibung für Kunstwerk 10',
      image: artwork10,
    },
    {
      id: 11,
      title: 'Kunstwerk 11',
      description: 'Beschreibung für Kunstwerk 11',
      image: artwork11,
    },
    {
      id: 12,
      title: 'Kunstwerk 12',
      description: 'Beschreibung für Kunstwerk 12',
      image: artwork12,
    },
    {
      id: 13,
      title: 'Kunstwerk 13',
      description: 'Beschreibung für Kunstwerk 13',
      image: artwork13,
    },
    {
      id: 14,
      title: 'Kunstwerk 14',
      description: 'Beschreibung für Kunstwerk 14',
      image: artwork14,
    },
    {
      id: 15,
      title: 'Kunstwerk 15',
      description: 'Beschreibung für Kunstwerk 15',
      image: artwork15,
    },
    {
      id: 16,
      title: 'Kunstwerk 16',
      description: 'Beschreibung für Kunstwerk 16',
      image: artwork16,
    },
  ]);

  const handleArtworkClick = (id: number) => {
    setSelectedArtwork(id);
    setZoom(1);
  };

  const handleClose = () => {
    setSelectedArtwork(null);
    setZoom(1);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleUpdateArtwork = (
    id: number,
    field: 'title' | 'description',
    value: string
  ) => {
    setArtworks((prev) =>
      prev.map((art) => (art.id === id ? { ...art, [field]: value } : art))
    );
  };

  const selected = artworks.find((art) => art.id === selectedArtwork);

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
              onClick={() => handleArtworkClick(artwork.id)}
            >
              <div className="aspect-[3/4] bg-muted flex items-center justify-center relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-foreground">{artwork.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {artwork.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={selectedArtwork !== null} onOpenChange={handleClose}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden">
            {selected && (
              <div className="flex flex-col md:flex-row h-full">
                <div className="flex-1 relative bg-muted overflow-hidden flex items-center justify-center p-8">
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      onClick={handleZoomOut}
                    >
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      onClick={handleZoomIn}
                    >
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                  </div>
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="max-w-full max-h-[80vh] object-contain transition-transform duration-200"
                    style={{ transform: `scale(${zoom})` }}
                  />
                </div>
                <div className="w-full md:w-96 p-6 bg-background overflow-y-auto">
                  <div className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="title">Name</Label>
                      <p className="mt-1 font-medium">{selected.title}</p>
                    </div>
                    <div>
                      <Label htmlFor="description">Beschreibung</Label>
                      <p className="mt-1">{selected.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
export default Gallery;
