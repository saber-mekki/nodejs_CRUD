import pool from "../database";
import { Request, Response } from "express";

export const postUser = async (req: Request, res: Response) => {

  try {
    await pool.query(
      "INSERT INTO kathya.test(id) VALUES ('saber')"
    );
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
