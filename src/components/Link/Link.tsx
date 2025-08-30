import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";
import React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref style={{ textDecoration: "none" }}>
      <MuiLink component="span" {...props}>
        {children}
      </MuiLink>
    </NextLink>
  );
};
