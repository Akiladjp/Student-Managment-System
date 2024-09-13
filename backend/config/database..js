import mysql from 'mysql';

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "students",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the MySQL database");
  }
});

export default db;
