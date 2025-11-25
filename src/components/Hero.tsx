const Hero = () => {
  return <section className="min-h-[60vh] flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-3xl">
        <div className="mb-8 flex justify-center">
          <img 
            src="/placeholder.svg" 
            alt="Sofiia Novikova - Künstlerin" 
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 shadow-elegant"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">Sofiia Novikova</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light">
          Künstlerin • Malerei • Portfolio
        </p>
      </div>
    </section>;
};
export default Hero;