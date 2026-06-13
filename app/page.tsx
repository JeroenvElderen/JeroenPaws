import { Bed, GraduationCap, Heart, House, Mail, MapPin, PawPrint, Phone, Shield, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const dogImages = [
  "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=900&q=80",
];

const services = [
  { icon: PawPrint, title: "Dog Walking", text: "Fun, structured walks tailored to your dog's energy level and personality.", image: dogImages[0] },
  { icon: House, title: "Home Visits", text: "Feeding, company and toilet breaks while you're away. Reliable and stress-free.", image: dogImages[1] },
  { icon: Bed, title: "Boarding", text: "A safe, comfortable home environment with plenty of care, attention and cuddles.", image: dogImages[2] },
  { icon: GraduationCap, title: "Training", text: "Positive, reward-based training to build a better bond and confidence.", image: dogImages[3] },
];

const stats = [
  { icon: PawPrint, value: "1,500+", label: "Adventures Shared" },
  { icon: Star, value: "5-Star", label: "Loved By Dogs & Humans" },
  { icon: Shield, value: "Fully Insured", label: "For peace of mind" },
  { icon: MapPin, value: "Local & Trusted", label: "Bray based" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="space-y-10 pb-10">
        <section id="home" className="panel overflow-hidden pt-7">
          <div className="grid min-h-[620px] lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative z-10 flex flex-col justify-center px-8 py-12 sm:px-14">
              <p className="eyebrow">Professional Dog Walking & Pet Care</p>
              <h1 className="mt-5 text-5xl leading-[.97] sm:text-7xl">The best part <span className="script block">of their day.</span></h1>
              <p className="mt-7 max-w-md text-lg leading-8 text-[var(--muted)]">Reliable walks, home visits, boarding and training in Bray, Wicklow & South Dublin.</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a className="button-primary" href="#contact">Book a Meet & Greet <PawPrint size={17} /></a>
                <a className="button-secondary" href="#contact">Let&apos;s Chat <Heart size={17} /></a>
              </div>
            </div>
            <div className="hero-photo relative flex items-end justify-center p-8">
              <span className="hand-note right-9 top-36">More tails.<br />More adventures.</span>
            </div>
          </div>
          <TrustBar />
        </section>

        <AboutBlock />
        <Services />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function TrustBar() {
  return <div className="grid gap-3 bg-[#f3ecf8] px-6 py-6 sm:grid-cols-2 lg:grid-cols-4">{stats.map(({ icon: Icon, value, label }) => <div key={value} className="flex items-center gap-4"><Icon className="text-[var(--primary)]" size={30} /><div><b>{value}</b><p className="text-sm text-[var(--muted)]">{label}</p></div></div>)}</div>;
}

function AboutBlock() {
  return <section id="about" className="panel grid gap-10 p-8 sm:p-12 lg:grid-cols-[.9fr_1.1fr]"><img className="photo h-[360px] w-full" src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1100&q=80" alt="Jeroen sitting with a happy dog" /><div className="flex flex-col justify-center"><p className="eyebrow">About Jeroen</p><h2>Hi, I&apos;m Jeroen <span className="text-[var(--primary)]">♣</span></h2><p>At Jeroen & Paws, every dog is treated as an individual. Whether it&apos;s a relaxed stroll, an energetic adventure or a quiet home visit, my focus is always the same:</p><p><b>Providing calm, reliable and professional care</b> that fits your dog&apos;s needs.</p><a className="button-primary mt-7 w-fit" href="#services">More About Me</a></div></section>;
}

function Services() {
  return <section id="services" className="panel p-8 sm:p-12"><div className="section-title"><p className="eyebrow">Services</p><h2>How I Can Help <span className="script">♡</span></h2><p>Every dog is different. My services are designed to keep them happy, healthy and well cared for.</p></div><div className="mt-10 grid gap-8 md:grid-cols-2">{services.map(({ icon: Icon, title, text, image }) => <article className="service-card" key={title}><div><span className="icon-bubble"><Icon size={32} /></span><h3>{title}</h3><p>{text}</p><a href="#contact">Learn More →</a></div><img src={image} alt={title} /></article>)}</div><div className="cta-strip mt-10"><div><h3>Not sure which service is right for your dog?</h3><p>Let&apos;s have a chat and find the perfect fit.</p></div><a className="button-light" href="#contact">Book a Meet & Greet <PawPrint size={17} /></a></div></section>;
}

function Reviews() {
  return <section id="reviews" className="panel overflow-hidden p-8 sm:p-12"><div className="section-title"><p className="eyebrow">What Clients Say</p><h2>Trusted by Dogs & Their Humans <span className="script">♡</span></h2></div><div className="mt-9 grid gap-6 md:grid-cols-3">{["Jeroen is amazing with our Labrador. He&apos;s reliable, professional and clearly loves what he does.", "Our dog gets so excited when Jeroen arrives. The updates and photos are a lovely touch.", "Peace of mind knowing our dog is in such good hands. Highly recommend!"].map((quote, i) => <blockquote className="review" key={quote}><div className="stars">★★★★★</div><p dangerouslySetInnerHTML={{ __html: `“${quote}”` }} /><b>— {['Sarah O.', 'Mark D.', 'Aoife K.'][i]}</b></blockquote>)}</div><div className="purple-wave"><img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=80" alt="Happy black dog" /><div><h3>Ready to give your dog the best part of their day?</h3><p>Book a free meet & greet to get started.</p><a className="button-light" href="#contact">Book a Meet & Greet <PawPrint size={17} /></a></div></div></section>;
}

function Gallery() {
  return <section id="gallery" className="panel p-8 sm:p-12"><div className="section-title"><p className="eyebrow">Gallery</p><h2>Adventures & Happy Tails <span className="script">♡</span></h2><p>A few highlights from our daily adventures together.</p></div><div className="gallery-grid mt-9">{dogImages.map((image, i) => <img key={image} src={image} alt={`Dog adventure ${i + 1}`} />)}</div><a className="button-primary mx-auto mt-8 w-fit" href="https://instagram.com">Follow Our Adventures on Instagram <span aria-hidden="true">◎</span></a></section>;
}

function Contact() {
  return <section id="contact" className="panel grid gap-10 p-8 sm:p-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Get In Touch</p><h2>Let&apos;s Chat <span className="text-[var(--primary)]">♣</span></h2><p>Have a question or want to book a meet & greet? I&apos;d love to hear from you!</p><div className="contact-list"><p><Phone /> 087 123 4567</p><p><Mail /> hello@jeroenandpaws.ie</p><p><MapPin /> Bray, Co. Wicklow</p><p><span aria-hidden="true">◎</span> @jeroen.and.paws</p></div></div><form className="contact-form"><input placeholder="Your Name" /><input placeholder="Email Address" /><input placeholder="Phone Number" /><textarea placeholder="Tell me about your dog..." rows={6} /><button className="button-primary" type="button">Send Message <PawPrint size={17} /></button></form></section>;
}
