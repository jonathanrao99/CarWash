"use client";

import Link from "next/link";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { Phone } from "lucide-react";

const assets = {
  logoDark: "/carLogo-Picsart-BackgroundRemover.png",
  logoLight: "/carLogo-Picsart-BackgroundRemover.png",
  mobileMenu: "https://framerusercontent.com/images/vVYHAbeDIbmiJN1MASeUFat5cQ.svg?width=28&height=17",
  heroPoster: "https://framerusercontent.com/images/gzHC3Xty578XYOqHN6HBF8rrx8.png?width=1920&height=830",
  heroVideo: "https://www.pexels.com/download/video/6872078/",
  aboutPoster: "https://framerusercontent.com/images/PeAMp2e1c9Rltp9k04bvgvOmNDw.png?width=1256&height=661",
  aboutVideo: "https://www.pexels.com/download/video/6873340/",
  detailingPoster: "https://framerusercontent.com/images/4KNTwpLO8zdlRuSjKqrvzfoSeo.png?width=1280&height=720",
  detailingVideo:
    "https://cdn.prod.website-files.com/64536e07e4457c86d160ae0e/64660daff2cab97438d3a811_pexels-pavel-danilyuk-6159201-1280x720-30fps-transcode.mp4",
  contactPoster: "https://framerusercontent.com/images/RyUnF115NzwpA2S15QCNSwrxo.png?width=1920&height=787",
  contactVideo: "https://www.pexels.com/download/video/6161372/",
  reviewCar: "https://framerusercontent.com/images/FmrlMGjkgZZm1cFKZNX8DZ2ZeM.jpg",
  star: "https://framerusercontent.com/images/2mBYMQOtgZ5Ljt4AC35wIbtM2o.svg",
  arrow: "https://framerusercontent.com/images/x1BFp7rT3Ec3n3O2JHzDaXdk0.svg",
  sliderArrow: "https://framerusercontent.com/images/H9hzrU7BlDATvTv5YKZROQa7Fo.svg",
};

const navLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Join Us", href: "/career" },
  { label: "All Pages", href: "/all-pages" },
];

const serviceCards = [
  {
    title: "Express Car Wash",
    href: "/services/express-wash",
    image: "https://framerusercontent.com/images/WCLeWItPH6ouIUMoDfGrXctjEc.jpg?width=1920&height=2880",
    copy:
      "Touch-free exterior wash packages starting at $9. Quick, thorough, and safe for your paint finish.",
  },
  {
    title: "Full Service Car Wash",
    href: "/services/full-service-wash",
    image: "https://framerusercontent.com/images/c1kB9AaiUFfYsuMJ7iuPYwyvE.jpg?width=1919&height=1277",
    copy:
      "Complete interior and exterior cleaning with hand drying. From $22.99 for a complete detail.",
  },
  {
    title: "Auto Detailing",
    href: "/services/auto-detailing",
    image: "https://framerusercontent.com/images/J72XpzATvOdrTcK5nRV9fAH3Qts.jpg?width=1920&height=2880",
    copy:
      "Professional detailing from express interior cleaning to full showroom restoration. Bundle and save.",
  },
  {
    title: "Express Lube",
    href: "/services/express-lube",
    image: "https://images.unsplash.com/photo-1771340742493-52fbd5476ccb?fm=jpg&q=80&w=1920",
    copy:
      "Oil changes starting at $39.99 with Pennzoil motor oil. Free deluxe car wash included.",
  },
];

const galleryImages = [
  "https://framerusercontent.com/images/WCLeWItPH6ouIUMoDfGrXctjEc.jpg?width=1920&height=2880",
  "https://framerusercontent.com/images/bJF210RftiXYrFIBEZTf4gohU1E.jpg?width=640&height=360",
  "https://framerusercontent.com/images/opUmsjSRZnoeYbRmL06p74PYBU0.jpg?width=640&height=960",
  "https://framerusercontent.com/images/S1CJwuelD9ERcNKTXhEle26GR1M.jpg?width=640&height=640",
];

const pricingCards = [
  {
    price: "$9",
    title: "Super Wash & Go",
    features: [
      "Touch-free wash",
      "Premium cleaning agents",
      "Spot-free rinse",
      "Air blower drying",
    ],
  },
  {
    price: "$22.99",
    title: "Deluxe Wash",
    features: [
      "Interior vacuum & wipe",
      "Hand wash & dry",
      "Wheel & tire cleaning",
      "Door jamb cleaning",
    ],
  },
  {
    price: "$49.99",
    title: "Super Clean Interior",
    features: [
      "Dashboard & console cleaning",
      "Carpet vacuum & shampoo",
      "Seat cleaning",
      "Door panel wipe-down",
    ],
  },
  {
    price: "$399.99",
    title: "Showroom Detailing",
    features: [
      "Full interior detailing",
      "Hand wash & clay bar",
      "Paint correction",
      "Hand wax application",
      "Engine bay cleaning",
      "Showroom-quality finish",
    ],
  },
];

const teamMembers = [
  {
    name: "Brooklyn Simmons",
    role: "Founder of CarWashSuperShine",
    image: "https://framerusercontent.com/images/sQuJJ3HKlKLNZ4krSzH4fPzRQ.jpg?scale-down-to=1024",
  },
  {
    name: "Guy Hawkins",
    role: "Main Detailing Specialist",
    image: "https://framerusercontent.com/images/3NOA8OaKXoEgpceXicNCJ09zA8.jpg?width=1492&height=856",
  },
  {
    name: "Robert Fox",
    role: "Mechanic",
    image: "https://framerusercontent.com/images/lPP45B8AbnUiOVZexoZKufnH0o.jpg?width=1035&height=842",
  },
  {
    name: "Jacob Jones",
    role: "Detailing Specialist",
    image: "https://framerusercontent.com/images/yHMEuA3baI8ZwI7JKjUx2TmgE.jpg?width=972&height=869",
  },
];

function VideoBackground({ poster, src, className = "" }) {
  return (
    <video
      className={`video-bg ${className}`}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      preload="none"
    >
      <source src={src} />
    </video>
  );
}

function SectionHeading({ eyebrow, title, copy, action }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <div>
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
      {action ? <div className="section-action">{action}</div> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Detailing />
      <Pricing />
      <Team />
      <Testimonials />
      <Appointment />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-left">
          <Link className="logo" href="/" aria-label="CarWashSuperShine home">
            <img src={assets.logoDark} alt="CarWashSuperShine" />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                className={link.label === "All Pages" ? "all-pages-link" : undefined}
                key={link.label}
                href={link.href}
              >
                <span>{link.label}</span>
                {link.label === "All Pages" ? (
                  <img src={assets.arrow} alt="" aria-hidden="true" />
                ) : null}
              </Link>
            ))}
          </nav>
        </div>
        <Button href="/contact-us">Book My Wash</Button>
        <Link className="mobile-menu-button" href="/all-pages" aria-label="Open navigation">
          <img src={assets.mobileMenu} alt="" aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="eyebrow">Houston's Trusted Car Wash</p>
          <h1>Touch-free car wash, detailing & lube</h1>
          <p>
            Super Shine Car Wash & Lube delivers professional car care with
            advanced technology and old-fashioned attention to detail.
          </p>
          <div className="hero-actions">
            <Button>Book My Wash</Button>
          </div>
        </div>
        <div className="hero-feature-card">
          <div className="hero-feature-media">
            <VideoBackground poster={assets.aboutPoster} src={assets.aboutVideo} />
          </div>
          <div className="hero-feature-copy">
            <span>Drive Clean. Drive Proud.</span>
            <p>
              From express washes and hand detailing to Pennzoil oil changes,
              we deliver professional care at every visit. Trust your car to the
              team that treats every vehicle like it is our own.
            </p>
            <Link href="/about-us" className="hero-text-link">
              Learn more about us
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-video-banner">
        <VideoBackground poster={assets.heroPoster} src={assets.heroVideo} />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="why-section">
      <div className="why-container">
        <h2>Your one-stop shop for premium car care in Houston</h2>
        <div className="why-images" aria-label="Car detailing process gallery">
          {galleryImages.map((image, index) => (
            <img key={image} src={image} alt={`Car care detail ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section">
      <SectionHeading
        eyebrow="Services"
        title="Complete Vehicle Care"
        copy="From quick washes to complete detailing and oil changes, every service is performed by trained professionals."
        action={<Link href="/services" className="section-action-link">View All Services</Link>}
      />
      <div className="service-list">
        {serviceCards.map((service, index) => (
          <Link className="service-card" key={service.title} href={service.href}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-info">
              <span className="card-number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <span className="text-link">View Details</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Detailing() {
  return (
    <section className="detailing-section">
      <VideoBackground poster={assets.detailingPoster} src={assets.detailingVideo} />
      <div className="detailing-overlay" />
      <div className="detailing-copy">
        <SectionHeading
          title="Car wash, detailing and lube services"
          copy="From touch-free washes and hand detailing to express lube and preventative maintenance, we offer complete car care."
        />
        <div className="detailing-content-card">
          <div className="experience-card">
            <strong>6+</strong>
            <span>Years Experience</span>
          </div>
          <div className="feature-list">
            <article>
              <h3>Car wash and detailing</h3>
              <p>
                From quick express washes to showroom-quality detailing, we
                keep your vehicle looking its best inside and out.
              </p>
            </article>
            <article>
              <h3>Express lube and maintenance</h3>
              <p>
                Keep your engine running smoothly with Pennzoil oil changes,
                air filter replacement, and cooling system service.
              </p>
            </article>
          </div>
          <Link href="/about-us" className="why-text-link why-text-link--light">Learn More</Link>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing-section">
      <div className="section pricing-content">
        <SectionHeading
          eyebrow="Pricing"
          title="Select Services"
          copy="Flexible packages from a quick $9 wash to complete $399.99 showroom detailing."
          action={<Link href="/pricing" className="section-action-link">View All</Link>}
        />
        <div className="pricing-grid">
          {pricingCards.map((item) => (
            <article className="pricing-card" key={item.title}>
              <span className="price">{item.price}</span>
              <h3>{item.title}</h3>
              <ul className="pricing-features">
                {item.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Button href="/contact-us" variant="secondary">
                Book Now
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section team-section">
      <SectionHeading eyebrow="Team" title="Meet Our Professionals" />
      <div className="team-grid">
        {teamMembers.map((member) => (
          <article className="team-card" key={member.name}>
            <img src={member.image} alt={member.name} />
            <div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const reviews = [
  {
    name: "Sarah L.",
    quote:
      "I had my interior detailing done at Super Shine, and they did an incredible job! My car looks and smells like new again. The attention to detail and the level of cleanliness they achieved exceeded my expectations. Highly recommended!",
    car: "AUDI TT / Ceramic Coating",
  },
  {
    name: "Michael R.",
    quote:
      "The express lube service was fast and affordable. They even threw in a free car wash. I have been coming here for months and will not go anywhere else.",
    car: "Ford F-150 / Express Lube",
  },
  {
    name: "Jessica T.",
    quote:
      "I got the full showroom detailing package and my car looks better than the day I bought it. The paint correction and wax work is absolutely flawless.",
    car: "BMW 3 Series / Showroom Detailing",
  },
  {
    name: "David K.",
    quote:
      "Super clean facility, friendly staff, and my truck has never looked better. The Wheel Deal package is an incredible value for the level of service you get.",
    car: "Toyota Tundra / Deluxe Wash",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const review = reviews[current];
  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-heading">
          <span aria-hidden="true" />
          <h2>Client Reviews</h2>
        </div>
        <div className="testimonial-content">
          <div className="testimonial-image">
            <img src={assets.reviewCar} alt="Clean detailed car" />
          </div>
          <div className="testimonial-card">
            <div className="reviewer">
              <div>
                <strong>{review.name}</strong>
              </div>
            </div>
            <blockquote>{review.quote}</blockquote>
            <div className="testimonial-bottom">
              <div className="stars" aria-label="Five star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <img key={index} src={assets.star} alt="" aria-hidden="true" />
                ))}
              </div>
              <p>{review.car}</p>
            </div>
            <div className="testimonial-arrows">
              <button type="button" onClick={prev} aria-label="Previous review">
                <img src={assets.sliderArrow} alt="" />
              </button>
              <button type="button" onClick={next} aria-label="Next review">
                <img src={assets.sliderArrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Appointment() {
  return (
    <section className="appointment-section">
      <div className="appointment-content">
        <div>
          <p className="eyebrow">Book Now</p>
          <h2>Let's book an appointment</h2>
          <p>
            Schedule your service today. Save up to 42% with our package pricing
            and special deals.
          </p>
        </div>
        <form className="contact-form">
          <input aria-label="Full name" placeholder="Full name*" type="text" />
          <input aria-label="Email" placeholder="Email" type="email" />
          <input aria-label="Phone number" placeholder="Phone number*" type="tel" />
          <input aria-label="Vehicle type" placeholder="Vehicle type" type="text" />
          <textarea aria-label="Additional requests" placeholder="Additional requests*" rows="5" />
          <button type="submit">Book Appointment</button>
        </form>
      </div>
      <VideoBackground poster={assets.contactPoster} src={assets.contactVideo} />
      <div className="video-overlay" />
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <img src={assets.logoLight} alt="CarWashSuperShine" />
        <div className="footer-title-wrapper">
          <h2>Drive Away Looking Brand New</h2>
          <p>Fast service. Professional results. Book online in under a minute.</p>
          <div className="footer-ctas">
            <Button href="/contact-us">Book My Wash</Button>
            <a className="phone-icon-link" href="tel:+12817700120" aria-label="Call us"><Phone size={24} /></a>
          </div>
        </div>
      </div>
      <div className="footer-grid">
        <div className="footer-nav-column">
          <div className="footer-block">
            <h3>Website Navigation</h3>
            <Link href="/services">View All Services</Link>
            <Link href="/about-us">Learn More About Us</Link>
          </div>
          <div className="footer-block">
            <h3>Houston Westheimer</h3>
            <a href="https://maps.app.goo.gl/Ro6u4YjgSfZZqn9q7" target="_blank" rel="noopener noreferrer">12810 Westheimer Road, Houston, TX 77077</a>
            <p>Open Daily 8am - 6pm</p>
          </div>
        </div>
        <span className="footer-divider" aria-hidden="true" />
        <div className="footer-nav-column">
          <div className="footer-block">
            <h3>Helpful Resources</h3>
            <Link href="/pricing">Exclusive Package Deals</Link>
            <Link href="/blog">Explore Our Blog</Link>
          </div>
        </div>
        <span className="footer-divider" aria-hidden="true" />
        <div className="footer-nav-column">
          <div className="footer-block">
            <h3>Customer Support</h3>
            <Link href="/contact-us">Get In Touch With Us Today</Link>
            <Link href="/our-team">Meet Our Team</Link>
          </div>
          <div className="footer-block">
            <h3>Opening Hours</h3>
            <p>Open Daily 8am - 6pm</p>
            <p>Monday - Sunday</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>CarWashSuperShine. All rights reserved.</p>
        <p>
          Designed by <a href="https://sol3studio.com/" target="_blank" rel="noopener noreferrer">Sol3 Studio</a>
        </p>
      </div>
    </footer>
  );
}
