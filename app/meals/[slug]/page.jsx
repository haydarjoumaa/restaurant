import React from "react";

import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/prisma";
import { notFound } from "next/navigation";

async function SpecificMeals({ params }) {
  const meal = await getMeal(params.slug);
  if (!meal) {
    notFound();
  }

  meal.instruction = meal.instruction.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creatorEmail}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instruction,
          }}
        ></p>
      </main>
    </>
  );
}

export default SpecificMeals;
