import { prisma } from "../../services/prisma";
import { User } from "@prisma/client";

export const createUser = async (data: User) => {
  const user = await prisma.user.create({
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
