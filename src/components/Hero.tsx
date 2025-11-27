const Hero = () => {
  return (
    <section className="min-h-[60vh] flex-col flex items-center justify-center px-6 py-20">
      <img
        alt="Sofiia Novikova - Künstlerin"
        className="h-40 md:h-48 object-cover "
        src="src/assets/portrait.png"
      />
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
          Sofiia Novikova
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light">
          Künstlerin • Malerei • Portfolio
        </p>
      </div>
    </section>
  );
};
export default Hero;
