"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { assets, footerLinks, navLinks } from "./site-data";
import { Button as AnimatedButton } from "../components/ui/button";
import { Phone, X } from "lucide-react";

export const Button = AnimatedButton;

const MOBILE_MENU_CLOSE_MS = 320;

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

export function SiteHeader({ transparent, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const closeTimerRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  const mobileLinks = [
    { label: "Home", href: "/" },
    ...navLinks,
    { label: "Blog", href: "/blog" },
    { label: "Our Team", href: "/our-team" },
    { label: "Contact", href: "/contact-us" },
  ];

  const closeMobileMenu = () => {
    window.clearTimeout(closeTimerRef.current);
    setMenuOpen(false);
  };

  const openMobileMenu = () => {
    window.clearTimeout(closeTimerRef.current);
    setMenuOpen(true);
  };

  const handleMobileNavigate = (href) => (event) => {
    event.preventDefault();

    if (href === pathname) {
      closeMobileMenu();
      return;
    }

    setMenuOpen(false);
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      startTransition(() => router.push(href));
    }, MOBILE_MENU_CLOSE_MS);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    return () => window.clearTimeout(closeTimerRef.current);
  }, []);

  const headerClass = `site-header${transparent ? " transparent" : ""}${scrolled ? " scrolled" : ""}`;

  return (
    <header className={headerClass}>
      <div className="header-inner">
        <div className="header-left">
          <Link className="logo" href="/" aria-label="CarWashSuperShine home">
            <img src={assets.logoDark} alt="CarWashSuperShine" />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <Button href="/contact-us">Book My Wash</Button>
        <button
          className="mobile-menu-button"
          type="button"
          onClick={openMobileMenu}
          aria-label="Open navigation"
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
        >
          <img src={assets.mobileMenu} alt="" aria-hidden="true" />
        </button>
      </div>
      <button
        className={`mobile-overlay${menuOpen ? " active" : ""}`}
        type="button"
        onClick={closeMobileMenu}
        aria-label="Close navigation"
        tabIndex={menuOpen ? 0 : -1}
      />
      <nav
        id="mobile-navigation"
        className={`mobile-menu${menuOpen ? " active" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu-header">
          <Link className="logo" href="/" aria-label="CarWashSuperShine home" onClick={handleMobileNavigate("/")} tabIndex={menuOpen ? 0 : -1}>
            <img src={assets.logoDark} alt="CarWashSuperShine" />
          </Link>
          <button
            className="mobile-menu-close"
            type="button"
            ref={closeButtonRef}
            onClick={closeMobileMenu}
            aria-label="Close navigation"
            tabIndex={menuOpen ? 0 : -1}
          >
            <X size={24} />
          </button>
        </div>
        <div className="mobile-menu-links">
          {mobileLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`mobile-menu-link${pathname === link.href ? " active" : ""}`}
              onClick={handleMobileNavigate(link.href)}
              aria-current={pathname === link.href ? "page" : undefined}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mobile-menu-footer">
          <p>12810 Westheimer Road, Houston, TX</p>
          <Button href="/contact-us" onClick={handleMobileNavigate("/contact-us")} tabIndex={menuOpen ? 0 : -1}>Book My Wash</Button>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <img src={assets.logoLight} alt="CarWashSuperShine" />
        <div className="footer-title-wrapper">
          <h2>Drive Away Looking Brand New</h2>
          <p>Fast service. Professional results. Book online in under a minute.</p>
          <div className="footer-ctas">
            <Button href="/contact-us">Book My Wash</Button>
            <a className="phone-icon-link" href="tel:+12817700120" aria-label="Call us"><Phone size={24} /></a>
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
            <a href="https://maps.app.goo.gl/Ro6u4YjgSfZZqn9q7" target="_blank" rel="noopener noreferrer">12810 Westheimer Road, Houston, TX 77077</a>
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
          Designed by <a href="https://sol3studio.com/" target="_blank" rel="noopener noreferrer">Sol3 Studio</a>
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
