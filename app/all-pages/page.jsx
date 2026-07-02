import Link from "next/link";
import { SectionHeading, SiteFooter, SiteHeader } from "../site-chrome";
import { assets, footerLinks, navLinks, serviceCards } from "../site-data";

export const metadata = {
  title: "All Pages | CarWashSuperShine",
  description: "Browse every CarWashSuperShine website page.",
};

export default function AllPagesPage() {
  const pages = [
    { label: "Home", href: "/" },
    ...navLinks,
    ...footerLinks,
    ...serviceCards.map((service) => ({ label: service.title, href: service.href })),
  ];

  const uniquePages = pages.filter(
    (page, index, list) => list.findIndex((item) => item.href === page.href) === index,
  );

  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <section className="page-hero">
          <div>
            <p className="eyebrow">All Pages</p>
            <h1>Website navigation</h1>
            <p>
              Browse every linked page in the CarWashSuperShine Next.js site conversion.
            </p>
          </div>
          <img src={assets.finishDetail} alt="CarWashSuperShine website page directory" />
        </section>
        <section className="page-section soft-section">
          <SectionHeading eyebrow="Sitemap" title="All Linked Pages" />
          <div className="list-grid">
            {uniquePages.map((page) => (
              <Link className="detail-card page-link-card" key={page.href} href={page.href}>
                <h3>{page.label}</h3>
                <p>{page.href}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
