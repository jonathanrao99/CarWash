import { Button, SectionHeading, SiteFooter, SiteHeader } from "../site-chrome";
import { teamMembers } from "../site-data";

export const metadata = {
  title: "Our Team | CarWashSuperShine",
  description: "Meet the Super Shine Car Wash & Lube detailing professionals in Houston, TX.",
};

export default function OurTeamPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <section className="page-hero compact-hero">
          <div>
            <p className="eyebrow">Our Team</p>
            <h1>Meet our dedicated team</h1>
            <p>
              Our specialists bring precision, care, and professional standards
              to every vehicle at Super Shine Car Wash & Lube.
            </p>
            <Button href="/career">Join Our Team</Button>
          </div>
        </section>
        <section className="page-section">
          <SectionHeading eyebrow="Professionals" title="Meet Our Team" />
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
