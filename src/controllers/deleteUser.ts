import pool from "../database";
import { Request, Response } from "express";

export const deleteUser = async (req: Request, res: Response) => {
  const { nom } = req.body;

  try {
    const result = await pool.query(
      `DELETE  FROM test.saber WHERE nom='${nom}' returning nom`
    );
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
