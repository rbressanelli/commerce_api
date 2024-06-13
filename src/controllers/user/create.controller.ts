import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { createUser } from "../../repositories/index";
import { createUserSchema } from "../../schemas";

export const create = async (req: Request, res: Response) => {
  try {
    await createUserSchema.validate(req.body);

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;

    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};
