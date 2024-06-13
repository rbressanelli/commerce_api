import { updateUser } from "../../repositories"
import { Request, Response } from "express";

export const update = async (req: Request, res: Response) => {
    try {
        const user = await updateUser(req.params.id, req.body)
        res.status(204).json(user)
    } catch (error) {
        res.status(400).json(error)
        
    }
}
