import Link from "next/link";
import { PawPrint } from "lucide-react";

const links = ["Home", "Services", "About", "Reviews", "Gallery", "Contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 mx-auto max-w-[1560px] rounded-t-[28px] bg-[#fffaf4]/92 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between gap-5 px-8 py-6 sm:px-12">
        <Link href="/" className="font-serif text-2xl font-black leading-none tracking-tight text-[var(--primary)]">JEROEN<br />& PAWS <PawPrint className="inline" size={16} /></Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          {links.map((link) => <a className="nav-link" href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}
        </nav>
        <a href="#contact" className="button-primary text-sm">Book a Meet & Greet <PawPrint size={16} /></a>
      </div>
    </header>
  );
}
