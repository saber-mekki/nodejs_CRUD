import { Pool } from "pg";
import env from "dotenv";

env.config();

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

export default pool;
