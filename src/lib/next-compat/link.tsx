import React from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

export interface LinkProps extends Omit<RouterLinkProps, "to"> {
  href?: string;
  to?: string;
  children: React.ReactNode;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, to, children, ...props }, ref) => {
    const destination = href || to || "#";

    // Handle external links or anchor links
    if (
      destination.startsWith("http://") ||
      destination.startsWith("https://") ||
      destination.startsWith("mailto:") ||
      destination.startsWith("tel:")
    ) {
      return (
        <a
          ref={ref}
          href={destination}
          target="_blank"
          rel="noopener noreferrer"
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <RouterLink ref={ref} to={destination} {...props}>
        {children}
      </RouterLink>
    );
  }
);

Link.displayName = "NextCompatLink";

export default Link;
