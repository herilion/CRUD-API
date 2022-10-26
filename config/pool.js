import dotenv from "dotenv";
dotenv.config();
import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
  host: `${process.env.DB_HOST}`,
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASS}`,
  database: `${process.env.DB_NAME}`,
  port: `${process.env.DB_PORT}`,
});
pool
  .connect()
  .then(() => {
    console.log("connection to the Database is successfully");
  })
  .catch(() => {
    console.log("Connection is Failed");
  });

const sql_Create = `
CREATE TABLE IF NOT EXISTS todos(id SERIAL PRIMARY KEY,title VARCHAR(250) NOT NULL,completed BOOLEAN DEFAULT FALSE);
`;
try {
  await pool.query(sql_Create, []);
} catch (e) {
  console.log(e);
}
export default pool;
