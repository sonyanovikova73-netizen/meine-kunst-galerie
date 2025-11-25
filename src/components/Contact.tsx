import { Mail, Phone, Smartphone } from "lucide-react";
const Contact = () => {
  return <section id="kontakt" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">Kontakt</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 mb-4 text-muted-foreground" />
            <h3 className="font-light mb-2">E-Mail</h3>
            <a className="text-muted-foreground hover:text-foreground transition-colors" href="mailto:sonyanovikova73@gmail.com">
              ​sonyanovikova73@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 mb-4 text-muted-foreground" />
            <h3 className="font-light mb-2">Social Media</h3>
            <div className="flex flex-col gap-2 items-center">
              <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="https://tiktok.com/@your_username" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                TikTok
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Smartphone className="w-8 h-8 mb-4 text-muted-foreground" />
            <h3 className="font-light mb-2">Standort</h3>
            <p className="text-muted-foreground">
              Oberstaufen, Deutschland
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;