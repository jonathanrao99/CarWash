import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Button({ children, href = "/contact-us", variant, className = "", ...props }) {
  const classes = ["button", "animated", variant, className].filter(Boolean).join(" ");
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
      <Link className={classes} href={href} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} {...props}>
      {content}
    </a>
  );
}
