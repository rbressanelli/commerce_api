import {
  create,
  getAll,
  getUserById,
  update,
  removeUser,
} from "../controllers";
import { Express } from "express";

const userRoutes = (app: Express) => {
  app.post("/user", create);
  app.get("/users", getAll);
  app.get("/user/:id", getUserById);
  app.put("/user/:id", update);
  app.delete("/user/:id", removeUser);
};

export default userRoutes;
