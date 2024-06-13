import { getById } from "../../repositories";
import { Request, Response } from "express";

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await getById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}
