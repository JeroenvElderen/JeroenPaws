import { PawPrint } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mx-auto mb-6 max-w-[1560px] rounded-b-[28px] bg-[var(--primary)] px-8 py-8 text-white shadow-2xl sm:px-12">
      <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
        <div><h2 className="text-2xl leading-none">Jeroen<br />& Paws <PawPrint className="inline" size={18} /></h2><p className="mt-6 text-white/65">© 2026 Jeroen & Paws. All rights reserved.</p></div>
        <div><b>Services</b><p>Dog Walking</p><p>Home Visits</p><p>Boarding & Training</p></div>
        <div><b>Company</b><p>About Me</p><p>Reviews</p><p>Gallery</p></div>
        <div><b>Contact</b><p>087 123 4567</p><p>hello@jeroenandpaws.ie</p><p>Bray, Co. Wicklow</p></div>
        <div><b>Follow Along</b><p className="mt-3 flex gap-3"><span>◎</span><span>f</span></p></div>
      </div>
    </footer>
  );
}
