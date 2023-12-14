import Link from "next/link";
import React from "react";

import logoImg from "@/assets/logo.png";

function PageHeader() {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="a plate with food" />
        NextLevel Food
      </Link>
      <nav>
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
