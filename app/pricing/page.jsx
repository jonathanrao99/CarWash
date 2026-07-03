import { Button, SectionHeading, SiteFooter, SiteHeader } from "../site-chrome";
import { assets, pricingCards } from "../site-data";

export const metadata = {
  title: "Pricing | CarWashSuperShine",
  description: "Car wash, detailing, and lube service packages starting at $9. Book online at Super Shine Car Wash & Lube in Houston, TX.",
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <section className="page-hero">
          <div>
            <p className="eyebrow">Pricing</p>
            <h1>Select your service</h1>
            <p>
              From a quick $9 wash to complete $399.99 showroom detailing, find
              the package that fits your needs.
            </p>
            <Button href="/contact-us">Book My Wash</Button>
          </div>
          <img src={assets.detailPoster} alt="Detailing package preview" />
        </section>
        <section className="page-section soft-section">
          <SectionHeading eyebrow="Packages" title="Our Packages" />
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
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
