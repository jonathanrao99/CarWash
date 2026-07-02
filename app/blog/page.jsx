import Link from "next/link";
import { SectionHeading, SiteFooter, SiteHeader } from "../site-chrome";
import { assets } from "../site-data";

const posts = [
  {
    title: "How often should you detail your car?",
    copy: "A practical guide to keeping your paint, cabin, and trim protected through every season.",
    image: assets.washDetail,
  },
  {
    title: "Ceramic coating vs wax",
    copy: "Understand the differences in durability, gloss, maintenance, and protection before choosing a package.",
    image: assets.polishDetail,
  },
  {
    title: "Why paint correction matters",
    copy: "Learn how professional correction removes swirls, oxidation, and dullness from your paint finish.",
    image: assets.reviewCar,
  },
];

export const metadata = {
  title: "Blog | CarWashSuperShine",
  description: "Car care tips and detailing advice from Super Shine Car Wash & Lube in Houston, TX.",
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <section className="page-hero">
          <div>
            <p className="eyebrow">Blog</p>
            <h1>Car care tips and advice</h1>
            <p>
              Resources for protecting your vehicle and choosing the right
              detailing services.
            </p>
          </div>
          <img src={assets.heroPoster} alt="CarWashSuperShine car care insights" />
        </section>
        <section className="page-section soft-section">
          <SectionHeading eyebrow="Latest" title="Car Care Insights" />
          <div className="list-grid">
            {posts.map((post) => (
              <article className="detail-card image-detail-card" key={post.title}>
                <img src={post.image} alt={post.title} />
                <h3>{post.title}</h3>
                <p>{post.copy}</p>
                <Link className="text-link" href="/services">
                  Explore Services
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
