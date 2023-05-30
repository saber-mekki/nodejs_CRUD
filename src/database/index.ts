import { Pool, QueryResult } from "pg";
import env from "dotenv";

env.config();

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

export async function executeSQLQuery(SQL: string): Promise<QueryResult<any>> {
  return new Promise<QueryResult>((resolve, reject) => {
    pool.query(SQL, (error, result) => {
      if (error) {
        return reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

export default pool;
