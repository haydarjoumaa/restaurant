"use client";

import Link from "next/link";
import React from "react";

import style from "./header.module.css";
import { usePathname } from "next/navigation";

function NavLink({ children, route }) {
  const pathname = usePathname();
  return (
    <Link
      className={pathname.startsWith(route) ? style.active : undefined}
      href={route}
    >
      {!!pathname.startsWith(route)}
      {children}
    </Link>
  );
}

export default NavLink;
