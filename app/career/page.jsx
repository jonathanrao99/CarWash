import { Button, SectionHeading, SiteFooter, SiteHeader } from "../site-chrome";
import { assets } from "../site-data";

const jobs = [
  "Detailing Specialist",
  "Paint Correction Technician",
  "Customer Care Coordinator",
];

export const metadata = {
  title: "Join Us | CarWashSuperShine",
  description: "Join the Super Shine Car Wash & Lube team in Houston, TX.",
};

export default function CareerPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <section className="page-hero">
          <div>
            <p className="eyebrow">Join Us</p>
            <h1>Join the Super Shine team</h1>
            <p>
              We are looking for people who take pride in quality work and great
              customer service.
            </p>
            <Button href="/contact-us">Apply Today</Button>
          </div>
          <img src={assets.careerImage} alt="Car detailing workspace" />
        </section>
        <section className="page-section soft-section">
          <SectionHeading
            eyebrow="Open Roles"
            title="Current Opportunities"
            copy="We are looking for motivated people who take pride in their work."
          />
          <div className="list-grid">
            {jobs.map((title) => (
              <article className="detail-card" key={title}>
                <h3>{title}</h3>
                <p>
                  Full-time and part-time opportunities available with training,
                  growth paths, and a professional detailing environment.
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
