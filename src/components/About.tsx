const About = () => {
  return (
    <section id="uber-mich" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 text-center">
          Über mich
        </h2>
        <div className="prose prose-lg mx-auto text-foreground/80">
          <p className="text-lg font-light leading-relaxed mb-6">
            [Hier können Sie Ihre künstlerische Biographie einfügen. Beschreiben Sie Ihren 
            künstlerischen Werdegang, Ihre Ausbildung und was Ihre Arbeit inspiriert.]
          </p>
          <p className="text-lg font-light leading-relaxed mb-6">
            [Erzählen Sie von Ihrer künstlerischen Vision, Ihrer bevorzugten Technik 
            und den Themen, die Sie in Ihren Werken erforschen.]
          </p>
          <p className="text-lg font-light leading-relaxed">
            [Erwähnen Sie wichtige Ausstellungen, Preise oder andere relevante 
            Informationen für Ihr professionelles Portfolio.]
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
