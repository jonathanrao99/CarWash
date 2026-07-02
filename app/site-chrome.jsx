import Link from "next/link";
import { assets, footerLinks, navLinks } from "./site-data";
import { Button as QuoteButton } from "../components/ui/button";

export function Button({ children, href = "/contact-us", variant = "primary" }) {
  const className = `button ${variant}`;
  const content = (
    <>
      <span>{children}</span>
      <span aria-hidden="true">-&gt;</span>
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link className={className} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <a className={className} href={href}>
      {content}
    </a>
  );
}

export function SectionHeading({ eyebrow, title, copy, action }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <div>
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
      {action ? <div className="section-action">{action}</div> : null}
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-left">
          <Link className="logo" href="/" aria-label="CarWashSuperShine home">
            <img src={assets.logoDark} alt="CarWashSuperShine" />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                className={link.label === "All Pages" ? "all-pages-link" : undefined}
                key={link.label}
                href={link.href}
              >
                <span>{link.label}</span>
                {link.label === "All Pages" ? (
                  <img src={assets.navArrow} alt="" aria-hidden="true" />
                ) : null}
              </Link>
            ))}
          </nav>
        </div>
        <QuoteButton href="/contact-us">Book an Appointment</QuoteButton>
        <Link className="mobile-menu-button" href="/all-pages" aria-label="Open navigation">
          <img src={assets.mobileMenu} alt="" aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <img src={assets.logoLight} alt="CarWashSuperShine" />
        <div className="footer-title-wrapper">
          <h2>Visit our Westheimer location in Houston</h2>
          <div className="footer-ctas">
            <Button href="/contact-us">Book an Appointment</Button>
            <a className="support-link" href="tel:+12817700120">
              Call Us Now
            </a>
          </div>
        </div>
      </div>
      <div className="footer-grid">
        <div className="footer-nav-column">
          <div className="footer-block">
            <h3>Website Navigation</h3>
            {footerLinks.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>
          <div className="footer-block">
            <h3>Houston Westheimer</h3>
            <p>12810 Westheimer Road, Houston, TX 77077</p>
            <p>Open Daily 8am - 6pm</p>
          </div>
        </div>
        <span className="footer-divider" aria-hidden="true" />
        <div className="footer-nav-column">
          <div className="footer-block">
            <h3>Helpful Resources</h3>
            {footerLinks.slice(2, 4).map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>
        </div>
        <span className="footer-divider" aria-hidden="true" />
        <div className="footer-nav-column">
          <div className="footer-block">
            <h3>Customer Support</h3>
            {footerLinks.slice(4).map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>
          <div className="footer-block">
            <h3>Opening Hours</h3>
            <p>Open Daily 8am - 6pm</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>CarWashSuperShine. All rights reserved.</p>
        <p>
          Designed by <a href="https://fourtwelve.co/">fourtwelve</a>
        </p>
      </div>
    </footer>
  );
}

export function ContactForm() {
  return (
    <form className="contact-form">
      <input aria-label="Full name" placeholder="Full name*" type="text" />
      <input aria-label="Email" placeholder="Email" type="email" />
      <input aria-label="Phone number" placeholder="Phone number*" type="tel" />
      <input aria-label="Vehicle type" placeholder="Vehicle type" type="text" />
      <textarea aria-label="Additional requests" placeholder="Additional requests*" rows="5" />
      <button type="submit">Book Appointment</button>
    </form>
  );
}
