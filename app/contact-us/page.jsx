import { ContactForm, SectionHeading, SiteFooter, SiteHeader } from "../site-chrome";
import { assets } from "../site-data";

export const metadata = {
  title: "Contact Us | CarWashSuperShine",
  description: "Visit Super Shine Car Wash & Lube in Houston for car wash, detailing, and lube services.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main contact-page">
        <section className="page-hero">
          <div>
            <p className="eyebrow">Contact Us</p>
            <h1>Let's book an appointment</h1>
            <p>
              Tell us about your vehicle and preferred service, and we will get
              back to you with a quote and available appointment times.
            </p>
          </div>
          <img src={assets.contactPoster} alt="Clean car appointment preview" />
        </section>
        <section className="page-section contact-grid">
          <div className="contact-panel">
            <ContactForm />
          </div>
          <aside className="detail-card contact-card">
            <SectionHeading eyebrow="Visit Us" title="Our Location" />
            <div className="location-block">
              <h3>Houston Westheimer</h3>
              <p>12810 Westheimer Road, Houston, TX 77077</p>
              <p>Open Daily 8am - 6pm</p>
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
