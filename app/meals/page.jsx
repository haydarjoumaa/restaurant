import React, { Suspense } from "react";

import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "../component/meals/meals-grid";
import { getAllData } from "@/lib/prisma";
import Loading from "./loading-out";

const Measls = async () => {
  const mealsData = await getAllData();
  return <MealsGrid meals={mealsData} />;
};

async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}></span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your Favotite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<Loading />}>
          <Measls />
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;
