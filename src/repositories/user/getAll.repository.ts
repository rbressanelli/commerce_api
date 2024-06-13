import { prisma } from "../../services/prisma";

export const getAllUsers = async () => {
    const users = await prisma.user.findMany({
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
    })
    return users
}
