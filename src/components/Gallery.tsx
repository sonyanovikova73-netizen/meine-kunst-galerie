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
      title: 'Gesundheit und gesundes Leben',
      description: (
        <>
          Dieses Bild habe ich in der Schule im Kunstunterricht zum Thema
          <br />
          <b>"Gesundheit und gesundes Leben"</b>
          gemalt. Ich wollte dabei das Thema Drogenkonsum aufgreifen, da dies
          leider ein weit verbreitetes Problem unter Jugendlichen ist.
        </>
      ),
      image: artwork1,
    },
    {
      id: 2,
      title: 'Dunkle Wogen',
      description:
        'Die dunklen Farben des Meeres wirken sehr geheimnisvoll. Die Wellen zeigen die unaufhaltsame Kraft der Natur. Es ist eine stimmungsvolle Szene, die zum Nachdenken anregt.',
      image: artwork2,
    },
    {
      id: 3,
      title: 'Das leuchtende Herz',
      description:
        'Das Herz wird durch die starken Farben sehr intensiv dargestellt. Die Farben sollen die Energie und die starken Gefühle zeigen, die wir in uns tragen.',
      image: artwork3,
    },
    {
      id: 4,
      title: 'Sonniger Nachmittag',
      description:
        'Dieses Bild vermittelt sofort ein Gefühl von Sommer und Leichtigkeit. Ich wollte die Freude und die Lebendigkeit eines sonnigen Tages durch die frischen Farben darstellen.',
      image: artwork4,
    },
    {
      id: 5,
      title: 'Zarte Pfingstrosen',
      description:
        'Die rosa Pfingstrosen strahlen Zärtlichkeit und Schönheit aus. Beim Malen dieser Blumen spürte ich Ruhe und wollte dieses Gefühl der Eleganz festhalten. Die Farben sind sanft und beruhigend.',
      image: artwork5,
    },
    {
      id: 6,
      title: 'Der Gentleman',
      description:
        'Dieses lustige Porträt soll den Betrachter sofort zum Lächeln bringen. Ich mag es, wenn Kunst überraschend ist und Freude auslöst. Der Frosch wirkt sehr selbstbewusst und elegant.',
      image: artwork6,
    },
    {
      id: 7,
      title: 'Vorstadt-Romantik',
      description:
        'Die Farben des Himmels sind so stark und beruhigend, dass man die Hektik des Tages vergisst. Ich wollte die melancholische Schönheit einfangen, die man oft an solchen gewöhnlichen Orten findet.',
      image: artwork7,
    },

    {
      id: 8,
      title: 'Goldene Stunde am Meer ',
      description:
        'Ich habe versucht, die besondere Magie der goldenen Stunde einzufangen. Die Ruhe und das warme Licht geben mir ein Gefühl von Frieden und Dankbarkeit. Es ist ein Moment zum Entspannen.',
      image: artwork8,
    },
    {
      id: 9,
      title: 'Licht im Sturm',
      description:
        'Das ist ein sehr starkes und dramatisches Bild. Es geht um innere Stärke und die Hoffnung, die bleibt, auch wenn das Leben wie ein Sturm ist. Der Leuchtturm symbolisiert für mich den sicheren Weg.',
      image: artwork9,
    },
    {
      id: 10,
      title: 'Gemütlichkeit am Fenster',
      description:
        'Dieses Bild war ein Geburtstagsgeschenk für meine gute Freundin. Es zeigt ihre geliebte Katze, wie sie gemütlich am Fensterbrett liegt und die Welt draußen beobachtet. Ich wollte ihre spezielle Verbindung zu ihrem Haustier und die Ruhe dieses Moments einfangen und ihr damit eine Freude machen.',
      image: artwork10,
    },
    {
      id: 11,
      title: 'Mediterraner Genuss',
      description:
        'Dieses Stillleben lässt mich sofort an einen warmen Urlaubstag denken. Ich wollte die entspannte Atmosphäre und das Gefühl von Leichtigkeit einfangen, das man bei einem Glas Wein und Trauben auf einer Terrasse spürt.',
      image: artwork11,
    },
    {
      id: 12,
      title: 'Eierblumen',
      description:
        'Dieses Bild ist sehr lustig und ungewöhnlich. Es soll zeigen, wie man aus Alltäglichem etwas Verrücktes und Kreatives machen kann. Die Eier als Blumen und das kleine Küken wecken Neugier und bringen eine spielerische Stimmung.',
      image: artwork12,
    },
    {
      id: 13,
      title: 'Das Märchenpaar',
      description:
        'Die beiden Figuren sehen aus wie aus einem alten Märchen. Ich wollte die Romantik und die ein bisschen traurige oder nachdenkliche Stimmung einer alten Geschichte einfangen.',
      image: artwork13,
    },
    {
      id: 14,
      title: 'Heimat im Licht ',
      description:
        'Dieses Bild ist eine Hommage an meine ukrainische Heimat. Es erinnert mich an die Weite der Landschaft und die tiefe Ruhe der Dörfer. Der große, weite Himmel symbolisiert das Gefühl von Freiheit und die starke Seele meines Landes.',
      image: artwork14,
    },
    {
      id: 15,
      title: 'Sommertag im Gasthof ',
      description:
        'Dieses Bild habe ich als Auftragsarbeit für meinen ehemaligen Chef gemalt und an ihn verkauft. Es hängt jetzt in seinem Hotel-Restaurant und fängt die fröhliche und einladende Atmosphäre eines Sommertages perfekt ein. Ich bin sehr stolz darauf, dass es dort die Gäste begrüßt.',
      image: artwork15,
    },
    {
      id: 16,
      title: 'Beste Freunde',
      description:
        'Das Bild zeigt drei Freunde, die zusammen den Sonnenuntergang genießen. Ich wollte damit zeigen, wie wichtig Freundschaft ist und wie ruhig und sicher man sich dabei fühlt.',
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
