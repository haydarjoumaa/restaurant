"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./prisma";
import { revalidatePath } from "next/cache";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instruction: formData.get("instructions"),
    image: formData.get("image"),
    creatorEmail: formData.get("email"),
    creator: formData.get("name"),
  };
  saveMeal(meal);
  revalidatePath("/meals", "page");
  redirect("/meals");
}
