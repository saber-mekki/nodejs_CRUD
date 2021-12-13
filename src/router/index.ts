import { Application } from "express";
import CommandeRouter from "./CommandeRouter";
import path from "path";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import cors from "cors";

export default (app: Application) => {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Saber API",
        version: "1.0.0",
        description:
          "This page is dedicated to the route list in the application",
      },
      servers: [
        {
          url: "http://localhost:" + process.env.PORT + "/api/v1",
        },
      ],
    },
    apis: [
      `${__dirname}/*${path.extname(path.basename(__filename))}`,
      `${__dirname}/*/*/*${path.extname(path.basename(__filename))}`,
    ],
  };
  const specs = swaggerJsDoc(options);

  app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(specs));
  app.get("/", (req, res) => {
    res.json({ message: "API Running ! " });
  });

  app.use("/api/v1/", [CommandeRouter]);
};
