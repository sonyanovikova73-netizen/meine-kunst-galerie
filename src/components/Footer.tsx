const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-muted-foreground font-light">
          © {new Date().getFullYear()} [Ihr Name]. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
