import { getAllUsers } from "../../repositories";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};
