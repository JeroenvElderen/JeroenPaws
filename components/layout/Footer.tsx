import Link from "next/link";
import { PawPrint } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        <div>
          <h2>
            Jeroen
            <br />& Paws <PawPrint className="inline" size={18} />
          </h2>
          <p>© 2026 Jeroen & Paws. All rights reserved.</p>
        </div>
        <div>
          <b>Services</b>
          <Link href="#services">Dog Walking</Link>
          <Link href="#services">Home Visits</Link>
          <Link href="#services">Boarding & Training</Link>
        </div>
        <div>
          <b>Company</b>
          <Link href="#about">About Me</Link>
          <Link href="#reviews">Reviews</Link>
          <Link href="#gallery">Gallery</Link>
        </div>
        <div>
          <b>Contact</b>
          <p>087 123 4567</p>
          <p>hello@jeroenandpaws.ie</p>
          <p>Bray, Co. Wicklow</p>
        </div>
        <div>
          <b>Follow Along</b>
          <p className="socials">
            <span>◎</span>
            <span>f</span>
          </p>
        </div>
      </div>
      <PawPrint className="footer-paw" size={112} />
    </footer>
  );
}
