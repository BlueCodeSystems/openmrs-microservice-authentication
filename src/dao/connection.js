import mysql from 'mysql2';

const pool = mysql.createPool({

  host: process.env.MYSQL_HOST || "localhost", 
  user: process.env.MYSQL_USERNAME || "openmrs", 
  password: process.env.MYSQL_USER_PASSWORD || "openmrs", 
  database: process.env.OPENMRS_MYSQL_DATABASE || "openmrs"
}).promise();

export default pool;