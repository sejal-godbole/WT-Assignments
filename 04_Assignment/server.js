const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",  // Avoid "localhost" issues
    user: "root",
    password: "Sejal@123",
    database: "Assignment4",
    connectionLimit: 10
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL!");
    connection.release();
});

pool.query(`SELECT * FROM users`, (err, results) => {
    if (err) {
        console.error("Query failed:", err);
        return;
    }
    console.log("Users:", results);
});
