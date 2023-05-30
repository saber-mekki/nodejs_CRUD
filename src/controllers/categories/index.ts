import { getCategories } from "../../services/categories";

import { Request, Response } from "express";

export const getCategoriesController = async (req: Request, res: Response) => {

  try {
    const result = await getCategories();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
