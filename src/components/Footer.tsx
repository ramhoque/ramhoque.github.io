const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-tight flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rayeed Hoque · Built with care.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Corvallis, OR · 44.5646° N, 123.2620° W
        </p>
      </div>
    </footer>
  );
};

export default Footer;
