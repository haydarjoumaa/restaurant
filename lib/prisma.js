import prisma from "@/prisma/prisma";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

export const getAllData = async () => {
  try {
    return prisma.meal.findMany();
  } catch (err) {
    throw new Error();
  }
};

export const getMeal = async (slug) => {
  return await prisma.meal.findUnique({
    where: {
      slug: slug,
    },
  });
};

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instruction = xss(meal.instruction);

  const extension = meal.image.type.split("/").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  stream.write(Buffer.from(await meal.image.arrayBuffer()), (error) => {
    if (error) {
      throw new Error("saving image failed");
    }
  });
  meal.image = `/images/${fileName}`;
  await prisma.meal.create({ data: meal });
  console.log("finally");
}
