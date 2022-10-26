import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
  host: "db.voeymieodkoqxvjmxdcu.supabase.co",
  user: "postgres",
  password: "Ndeko123#@TpsxJxk7HfncK",
  database: "postgres",
  port: "5432",
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
