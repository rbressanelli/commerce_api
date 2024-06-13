import { prisma } from "../../services/prisma";
import { User } from "@prisma/client";

export const updateUser = async (id: string, data: User) => {
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data,
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
