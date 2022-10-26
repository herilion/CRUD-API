import pool from "./pool.js";
const query = (text, params) => pool.query(text, params);
export default query;
