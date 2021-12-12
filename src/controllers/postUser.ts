import pool from "../database";
import { Request, Response } from "express";

export const postUser = async (req: Request, res: Response) => {
  try {
    await pool.query(
      "INSERT INTO test.test(nom, email, num_tel,age) VALUES ('saber','mekk@gmail',111,12)"
    );
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
