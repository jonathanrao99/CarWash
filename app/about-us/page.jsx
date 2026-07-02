import { Button, SectionHeading, SiteFooter, SiteHeader } from "../site-chrome";
import { assets, teamMembers } from "../site-data";

export const metadata = {
  title: "About Us | CarWashSuperShine",
  description: "Super Shine Car Wash & Lube is Houston's trusted name for car wash, detailing, express lube, and preventative maintenance at our Westheimer location.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <section className="page-hero">
          <div>
            <p className="eyebrow">About Us</p>
            <h1>Car care you can trust</h1>
          <p>
            Super Shine Car Wash & Lube is a one-stop destination for premium
            car care in Houston. We offer touch-free automatic washes,
            showroom-quality detailing, and express lube services at our
            Westheimer location.
          </p>
            <Button href="/contact-us">Book an Appointment</Button>
          </div>
          <img src={assets.aboutPoster} alt="CarWashSuperShine detailing process" />
        </section>
        <section className="page-section">
          <SectionHeading
            eyebrow="Our Standard"
            title="Car wash, detailing & lube experts"
            copy="We combine modern wash technology with skilled hand detailing for superior car care at every visit."
          />
          <div className="stat-grid">
            <article>
              <strong>12+</strong>
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
