const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
  connectionLimit: 10,

  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

const connectDB = () => {
  db.getConnection((error, connection) => {
    if (error) {
      console.error("Database connection failed:", error.message);
      process.exit(1);
    }

    console.log("MySQL Database Connected");

    connection.release();
  });
};

module.exports = {
  db,
  connectDB,
};