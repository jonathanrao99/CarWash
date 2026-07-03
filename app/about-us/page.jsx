"use client";

import { useState, useEffect } from "react";
import { Button, SectionHeading, SiteFooter, SiteHeader } from "../site-chrome";
import { assets, teamMembers } from "../site-data";

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <SiteHeader transparent scrolled={scrolled} />
      <main>
        <section className="about-hero">
          <img src={assets.aboutPoster} alt="" className="about-hero-bg" />
          <div className="about-hero-overlay" />
          <div className="about-hero-content">
            <p className="eyebrow">About Us</p>
            <h1>More Than a Car Wash</h1>
            <p>
              From touch-free washes to showroom-quality detailing and express lube services, we help keep your vehicle looking its best — quickly, professionally, and with care.
            </p>
            <Button href="/contact-us">Book My Wash</Button>
          </div>
        </section>
        <section className="page-section">
          <SectionHeading
            eyebrow="Our Standard"
            title="Car wash, detailing & lube experts"
            copy="We combine modern wash technology with skilled hand detailing for superior car care at every visit."
          />
          <div className="stat-grid">
            <article>
              <strong>6+</strong>
              <span>Years Experience</span>
            </article>
            <article>
              <strong>10k+</strong>
              <span>Vehicles Served</span>
            </article>
            <article>
              <strong>98%</strong>
              <span>Satisfaction Rate</span>
            </article>
          </div>
        </section>
        <section className="page-section soft-section">
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
      </main>
      <SiteFooter />
    </>
  );
}
