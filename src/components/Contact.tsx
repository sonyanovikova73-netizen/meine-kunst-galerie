import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
          Kontakt
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 mb-4 text-muted-foreground" />
            <h3 className="font-light mb-2">E-Mail</h3>
            <a 
              href="mailto:ihre.email@beispiel.de" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ihre.email@beispiel.de
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 mb-4 text-muted-foreground" />
            <h3 className="font-light mb-2">Telefon</h3>
            <a 
              href="tel:+49123456789" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              +49 (0) 123 456789
            </a>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 mb-4 text-muted-foreground" />
            <h3 className="font-light mb-2">Standort</h3>
            <p className="text-muted-foreground">
              [Ihre Stadt], Deutschland
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
