import Link from "next/link";
import { PawPrint } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="site-nav">
      <Link href="#home" className="brand" aria-label="Jeroen and Paws home">
        JEROEN
        <br />& PAWS <PawPrint className="inline" size={16} />
      </Link>
      <nav aria-label="Main navigation">
        {links.map((link, index) => (
          <Link className={`nav-link ${index === 0 ? "active" : ""}`} href={link.href} key={link.label}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link href="#contact" className="button-primary nav-cta">
        Book a Meet & Greet <PawPrint size={16} />
      </Link>
    </header>
  );
}
