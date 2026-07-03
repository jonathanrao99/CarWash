import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Button({ children, href = "/contact-us", variant }) {
  const className = variant ? `button animated ${variant}` : "button animated";
  const content = (
    <>
      <span className="btn-text">{children}</span>
      <span className="btn-icon">
        <ArrowUpRight size={16} />
      </span>
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link className="button animated" href={href}>
        {content}
      </Link>
    );
  }

  return (
    <a className="button animated" href={href}>
      {content}
    </a>
  );
}
