/* eslint-disable @next/next/no-img-element */
import { Camera, Heart, Mail, PawPrint } from "lucide-react";
import Link from "next/link";

const photos = {
  hero: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=2200&q=90",
  about: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=1200&q=90",
  adventure: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=90",
  forest: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=90",
  portrait: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=90",
  story: "https://images.unsplash.com/photo-1523480717984-24cba35ae1ef?auto=format&fit=crop&w=900&q=90",
  testimonial: "https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=1800&q=90",
  cta: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=900&q=90",
};

const navLinks = ["Home", "About", "Portfolio", "Experience", "Contact"];

const portfolio = [
  ["Adventures", photos.adventure],
  ["Connection", photos.forest],
  ["Portraits", photos.portrait],
  ["Stories", photos.story],
];

const steps = [
  { icon: PawPrint, number: "01", title: "Connect", text: "We get to know you and your dog. We plan the perfect session for you both." },
  { icon: Camera, number: "02", title: "Session", text: "A relaxed outdoor session where your dog can be themselves. No pressure, just fun." },
  { icon: Heart, number: "03", title: "Memories", text: "Beautiful, timeless images you’ll cherish for a lifetime." },
];

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Testimonial />
      <FinalCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="home-hero" id="home">
      <div className="hero-shade" />
      <Header />
      <div className="hero-content">
        <h1>Dog photography<br />for people who see<br />their dogs as <span>family.</span></h1>
        <p>Natural, emotional photography<br />across Ireland and the Netherlands.</p>
        <Link className="purple-button" href="#contact">Book your session <PawPrint size={15} /></Link>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="home-header">
      <Link href="#home" className="home-logo">Jeroen<br />And Paws</Link>
      <nav>
        {navLinks.map((link) => (
          <Link className={link === "Home" ? "active" : ""} href={`#${link.toLowerCase()}`} key={link}>{link}</Link>
        ))}
      </nav>
      <Link className="nav-book" href="#contact">Book a session</Link>
    </header>
  );
}

function About() {
  return (
    <section className="about-home" id="about">
      <img src={photos.about} alt="Photographer with a dog in the mountains" />
      <div className="about-copy">
        <p className="eyebrow">About me</p>
        <h2>Every dog has a story<br />worth <span>remembering.</span></h2>
        <p>I’m Jeroen, a dog photographer with a passion for capturing real moments and the unique bond between dogs and their humans. My sessions are relaxed, natural and focused on what matters most — connection.</p>
        <Link className="purple-button small" href="#about">More about me <PawPrint size={14} /></Link>
      </div>
      <PawPrint className="about-paw" size={110} />
    </section>
  );
}

function Portfolio() {
  return (
    <section className="portfolio-home" id="portfolio">
      <div className="section-row">
        <div><p className="overline">Portfolio</p><h2>Moments. Connection. Memories.</h2></div>
        <Link className="outline-button" href="#portfolio">View full portfolio <PawPrint size={14} /></Link>
      </div>
      <div className="portfolio-grid">
        {portfolio.map(([title, image]) => (
          <article className="portfolio-card" key={title}>
            <img src={image} alt={`${title} dog photography`} />
            <div><h3>{title}</h3><p>See gallery →</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-home" id="experience">
      <p className="eyebrow center">The experience</p>
      <h2>A simple process,<br /><span>beautiful</span> results.</h2>
      <div className="steps">
        {steps.map(({ icon: Icon, number, title, text }) => (
          <article className="step" key={title}>
            <span className="step-icon"><Icon size={30} /></span>
            <small>{number}</small>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="testimonial-home">
      <div className="testimonial-copy">
        <div className="quote-mark">“</div>
        <blockquote>“Jeroen has a unique way of capturing the soul of your dog. The photos are absolutely breathtaking.”</blockquote>
        <p>— Marleen</p>
        <div className="dots"><span /><i /><i /><i /></div>
      </div>
      <img src={photos.testimonial} alt="Expressive dog portrait" />
    </section>
  );
}

function FinalCta() {
  return (
    <footer className="final-cta" id="contact">
      <div className="footer-brand">
        <Link href="#home" className="home-logo purple-logo">Jeroen<br />And Paws</Link>
        <p>Natural dog photography<br />across Ireland & the Netherlands.</p>
        <div className="socials"><span>◎</span><span>f</span><Mail size={22} /></div>
      </div>
      <div className="footer-center">
        <h2>Ready to capture<br />your story <span>together?</span></h2>
        <p>Let’s create something beautiful.</p>
        <Link className="purple-button" href="mailto:hello@jeroenandpaws.ie">Book your session <PawPrint size={14} /></Link>
      </div>
      <img src={photos.cta} alt="Dog photography session in the mountains" />
    </footer>
  );
}
