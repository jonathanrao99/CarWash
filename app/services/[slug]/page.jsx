import { notFound } from "next/navigation";
import { Button, SectionHeading, SiteFooter, SiteHeader } from "../../site-chrome";
import { serviceCards } from "../../site-data";

export function generateStaticParams() {
  return serviceCards.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceCards.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service | CarWashSuperShine" };
  }

  return {
    title: `${service.title} | CarWashSuperShine`,
    description: service.copy,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = serviceCards.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <section className="page-hero">
          <div>
            <p className="eyebrow">Service Detail</p>
            <h1>{service.title}</h1>
            <p>{service.details}</p>
            <Button href="/contact-us">Book This Service</Button>
          </div>
          <img src={service.image} alt={`${service.title} service`} />
        </section>
        <section className="page-section">
          <SectionHeading
            eyebrow="Included"
            title="What's Included"
            copy="Every service is performed by trained professionals using safe processes, premium products, and professional-grade equipment."
          />
          <div className="list-grid">
            {service.features.map((feature) => (
              <article className="detail-card" key={feature}>
                <h3>{feature}</h3>
                <p>
                  Delivered with careful preparation, consistent technique, and
                  a final quality check before your vehicle leaves the bay.
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
