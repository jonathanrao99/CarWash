import Link from "next/link";
import { Button, SectionHeading, SiteFooter, SiteHeader } from "../site-chrome";
import { serviceCards } from "../site-data";

export const metadata = {
  title: "Services | CarWashSuperShine",
  description: "Professional car wash, auto detailing, express lube, and preventative maintenance services in Houston, TX. Book online.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <section className="page-hero compact-hero">
          <div>
            <p className="eyebrow">Services</p>
            <h1>Complete car care services</h1>
            <p>
              From express washes and full-service detailing to oil changes and
              preventative maintenance, we offer everything your car needs
              under one roof.
            </p>
          </div>
          <Button href="/pricing">View Pricing</Button>
        </section>
        <section className="section services-section page-services">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Services"
            copy="Discover our range of cleaning and maintenance services designed to keep your vehicle looking and performing its best."
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
      </main>
      <SiteFooter />
    </>
  );
}
