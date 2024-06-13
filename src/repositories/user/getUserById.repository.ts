import { prisma } from "../../services/prisma";

export const getById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      surname: true,
      username: true,
      password: false,
      email: true,
      active: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};
