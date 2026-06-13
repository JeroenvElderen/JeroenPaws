/* eslint-disable @next/next/no-img-element */
import {
  Award,
  Bed,
  BriefcaseMedical,
  GraduationCap,
  Heart,
  Home as HomeIcon,
  Mail,
  MapPin,
  PawPrint,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const photos = {
  hero: "https://images.unsplash.com/photo-1541599468348-e96984315921?auto=format&fit=crop&w=1600&q=90",
  jeroen: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=90",
  golden: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=90",
  collie: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=90",
  puppy: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=90",
  training: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=90",
  blackDog: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=90",
  beach: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=900&q=90",
  lab: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=90",
};

const services = [
  { icon: PawPrint, title: "Dog Walking", text: "Fun, structured walks tailored to your dog's energy level and personality.", image: photos.golden },
  { icon: HomeIcon, title: "Home Visits", text: "Feeding, company and toilet breaks while you're away. Reliable and stress-free.", image: photos.collie },
  { icon: Bed, title: "Boarding", text: "A safe, comfortable home environment with plenty of care, attention and cuddles.", image: photos.puppy },
  { icon: GraduationCap, title: "Training", text: "Positive, reward-based training to build a better bond and confidence with your dog.", image: photos.training },
];

const trustItems = [
  { icon: PawPrint, value: "1,500+", label: "Adventures Shared" },
  { icon: Star, value: "5-Star", label: "Loved By Dogs & Humans" },
  { icon: Shield, value: "Fully Insured", label: "For peace of mind" },
  { icon: MapPin, value: "Local & Trusted", label: "Bray based" },
];

const gallery = [
  photos.collie,
  photos.golden,
  photos.hero,
  photos.lab,
  photos.blackDog,
  photos.beach,
  photos.jeroen,
  photos.training,
];

const reviews = [
  { quote: "Jeroen is amazing with our Labrador. He's reliable, professional and clearly loves what he does.", name: "Sarah O.", place: "Bray" },
  { quote: "Our dog gets so excited when Jeroen arrives. The updates and photos are a lovely touch.", name: "Mark D.", place: "South Dublin" },
  { quote: "Peace of mind knowing our dog is in such good hands. Highly recommend!", name: "Aoife K.", place: "Wicklow" },
];

export default function Home() {
  return (
    <div className="landing-shell">
      <Navbar />
      <main>
        <Hero />
        <HomeAbout />
        <Services />
        <About />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="panel hero-panel" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Professional Dog Walking & Pet Care</p>
        <h1>
          The best part
          <span className="script block">of their day.</span>
        </h1>
        <p>Reliable walks, home visits, boarding and training in Bray, Wicklow & South Dublin.</p>
        <div className="hero-actions">
          <a className="button-primary" href="#contact">Book a Meet & Greet <PawPrint size={17} /></a>
          <a className="button-secondary" href="#contact">Let&apos;s Chat <Heart size={17} /></a>
        </div>
      </div>
      <div className="hero-photo" />
      <p className="scribble hero-note">More tails.<br />More adventures. ♡</p>
      <div className="trust-bar">
        {trustItems.map(({ icon: Icon, value, label }) => (
          <div className="trust-item" key={value}>
            <Icon size={33} />
            <span><b>{value}</b><small>{label}</small></span>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeAbout() {
  return (
    <section className="panel home-about-card">
      <img className="photo" src={photos.jeroen} alt="Jeroen kneeling beside a happy dog" />
      <div>
        <p className="eyebrow">About Jeroen</p>
        <h2>Hi, I’m Jeroen <span className="purple">♣</span></h2>
        <p>At Jeroen & Paws, every dog is treated as an individual. Whether it&apos;s a relaxed stroll, an energetic adventure or a quiet home visit, my focus is always the same:</p>
        <p><b>Providing calm, reliable and professional care</b> that fits your dog&apos;s needs.</p>
        <a className="button-primary compact" href="#about">More About Me</a>
      </div>
      <span className="doodle doodle-one">⌒⌒</span>
    </section>
  );
}

function Services() {
  return (
    <section className="panel section-panel" id="services">
      <SectionIntro eyebrow="Services" title="How I Can Help" />
      <div className="services-grid">
        {services.map(({ icon: Icon, title, text, image }) => (
          <article className="service-card" key={title}>
            <div>
              <span className="icon-bubble"><Icon size={34} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact">Learn More →</a>
            </div>
            <img src={image} alt={title} />
          </article>
        ))}
      </div>
      <div className="cta-strip">
        <div>
          <h3>Not sure which service is right for your dog?</h3>
          <p>Let&apos;s have a chat and find the perfect fit.</p>
        </div>
        <a className="button-light" href="#contact">Book a Meet & Greet <PawPrint size={17} /></a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="panel about-panel" id="about">
      <div className="about-copy">
        <p className="eyebrow">About Me</p>
        <h2>Hi, I’m Jeroen <span className="purple">♣</span></h2>
        <p>Dogs have been part of my life for as long as I can remember.</p>
        <p>Over the years I’ve gained experience in walking, training and caring for dogs of all shapes, sizes and personalities.</p>
        <p>My approach is simple:<br /><b>Calm, consistent and tailored to each dog&apos;s individual needs.</b></p>
        <p className="scribble quote-note">“Happy dogs. Happy humans.<br />That’s what it’s all about.” ♡</p>
      </div>
      <img className="photo about-main-photo" src={photos.jeroen} alt="Jeroen spending time with a dog in the woods" />
      <div className="about-badges">
        <Badge icon={Award} title="Experienced" text="& Trained" />
        <Badge icon={Heart} title="Positive" text="Approach" />
        <Badge icon={Shield} title="Fully" text="Insured" />
        <Badge icon={BriefcaseMedical} title="First Aid" text="Certified" />
      </div>
      <div className="about-life">
        <div><b>When I&apos;m not out on adventures...</b><p>You’ll probably find me exploring Wicklow, at the gym or with friends and family.</p></div>
        <img src={photos.hero} alt="Walking dogs in the mountains" />
        <img src={photos.golden} alt="Jeroen holding a treat for a dog" />
        <img src={photos.beach} alt="Dog walking on the beach" />
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="panel reviews-panel" id="reviews">
      <SectionIntro eyebrow="What Clients Say" title="Trusted by Dogs & Their Humans" />
      <div className="reviews-grid">
        {reviews.map((review) => (
          <blockquote className="review-card" key={review.name}>
            <div className="stars">★★★★★</div>
            <p>“{review.quote}”</p>
            <b>— {review.name}</b>
            <small>{review.place}</small>
          </blockquote>
        ))}
      </div>
      <a className="button-primary google-button" href="https://google.com">Read More Reviews on Google <span>G</span></a>
      <div className="review-wave">
        <img src={photos.blackDog} alt="Happy black dog" />
        <div>
          <h3>Ready to give your dog the best part of their day?</h3>
          <p>Book a free meet & greet to get started.</p>
          <a className="button-light" href="#contact">Book a Meet & Greet <PawPrint size={17} /></a>
        </div>
        <p className="scribble wave-note">Can&apos;t wait to<br />meet you!</p>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="panel section-panel" id="gallery">
      <SectionIntro eyebrow="Gallery" title="Adventures & Happy Tails" />
      <div className="gallery-grid">
        {gallery.map((image, index) => <img src={image} alt={`Dog adventure ${index + 1}`} key={image} />)}
      </div>
      <a className="button-primary instagram-button" href="https://instagram.com">Follow Our Adventures on Instagram <span>◎</span></a>
    </section>
  );
}

function Contact() {
  return (
    <section className="panel contact-panel" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Get In Touch</p>
        <h2>Let’s Chat <span className="purple">♣</span></h2>
        <p>Have a question or want to book a meet & greet? I’d love to hear from you!</p>
        <div className="contact-list">
          <ContactLine icon={Phone} title="Phone" text="087 123 4567" />
          <ContactLine icon={Mail} title="Email" text="hello@jeroenandpaws.ie" />
          <ContactLine icon={MapPin} title="Location" text="Bray, Co. Wicklow / Serving Bray, Wicklow & South Dublin" />
          <p><span className="insta-glyph">◎</span><span><b>Instagram</b><small>@jeroen.and.paws</small></span></p>
        </div>
      </div>
      <form className="contact-form">
        <input placeholder="Your Name" />
        <input placeholder="Email Address" />
        <input placeholder="Phone Number" />
        <textarea placeholder="Tell me about your dog..." rows={7} />
        <button className="button-primary" type="button">Send Message <PawPrint size={17} /></button>
      </form>
      <p className="scribble contact-note">Woof you<br />soon! ♡</p>
      <img className="contact-dog" src={photos.golden} alt="Happy dog waiting for a message" />
    </section>
  );
}

function SectionIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title} <span className="script">♡</span></h2>
      <p>A few highlights from our daily adventures together.</p>
    </div>
  );
}

function Badge({ icon: Icon, title, text }: { icon: typeof Award; title: string; text: string }) {
  return <div><Icon size={32} /><b>{title}</b><small>{text}</small></div>;
}

function ContactLine({ icon: Icon, title, text }: { icon: typeof Phone; title: string; text: string }) {
  return <p><Icon size={24} /><span><b>{title}</b><small>{text}</small></span></p>;
}
