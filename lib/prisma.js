import prisma from "@/prisma/prisma";

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
