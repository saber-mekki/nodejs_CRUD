import { Application } from "express";
import CommandeRouter from "./CommandeRouter";

export default (app: Application) => {
  app.get("/", (req, res) => {
    res.json({ message: "API Running ! " });
  });

  app.use("/api/v1/", [CommandeRouter]);
};
