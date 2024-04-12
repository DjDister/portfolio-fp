import Link from "next/link";
import React from "react";
import ArrowTopRight from "../assets/ArrowTopRight";

export default function StyledLink({
  href,
  name,
  icon = <ArrowTopRight />,
}: {
  href: string;
  name: string;
  icon?: JSX.Element;
}) {
  return (
    <Link
      href={href}
      className="py-1 flex items-center justify-center gap-1 text-[#D3E97A] border-b-2 border-[#D3E97A]"
    >
      {name}
      {icon}
    </Link>
  );
}
