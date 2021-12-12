import pool from "../database";
import { Request, Response } from "express";

export const deleteUser = async (req: Request, res: Response) => {
  const { deb, fin } = req.body;

  try {
    const result = await pool.query(
      "DELETE  FROM test.saber WHERE nom='saber' "
    );
    res.status(200).json("oki");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
