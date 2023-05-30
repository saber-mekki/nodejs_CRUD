import { Request, Response } from "express";
import pool, { executeSQLQuery } from "../../database";

export const getCategories = async () => {
    const query = "SELECT data FROM kathya.admin WHERE type='categorie'";
    const result = await executeSQLQuery(query);
    console.log(result.rows[0])
    return result.rows[0];
};
