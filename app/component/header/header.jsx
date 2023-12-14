import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoImg from "@/assets/logo.png";

import style from "./header.module.css";

function PageHeader() {
  return (
    <header className={style.header}>
      <Link className={style.logo} href="/">
        <Image src={logoImg} alt="a plate with food" priority />
        NextLevel Food
      </Link>
      <nav className={style.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Browse Meals</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default PageHeader;
