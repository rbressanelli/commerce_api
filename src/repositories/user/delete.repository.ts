import { prisma } from "../../services/prisma";

export const deleteUser = async (id: string) => {
  await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return null;
};
