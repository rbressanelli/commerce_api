import { deleteUser } from "../../repositories";
import { Request, Response } from "express";

export const removeUser = async (req: Request, res: Response) => {
    try {
        await deleteUser(req.params.id)
        res.status(204).json()
    } catch (error) {
        res.status(400).json(error)
    }
}
