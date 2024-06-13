import { create, getAll, getUserById } from "../controllers";
import { Express } from "express";

const userRoutes = (app: Express) => {
  app.post("/user", create);
  app.get("/users", getAll);
  app.get("/user/:id", getUserById)

};

export default userRoutes;
