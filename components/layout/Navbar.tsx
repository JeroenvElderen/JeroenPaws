import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Jeroen & Paws
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="bg-[var(--primary)] text-white px-5 py-3 rounded-full"
        >
          Book a Meet & Greet
        </Link>
      </div>
    </header>
  );
}