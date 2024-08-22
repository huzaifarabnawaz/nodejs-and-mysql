
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();

export async function getNotes() {
    const [rows] = await pool.query("SELECT * FROM `users`");
    return rows;
}

export async function getNote(id) {
    const [rows] = await pool.query("SELECT * FROM users WHERE usersid = ?", [id]);
    return rows[0];
}




export async function createNote(name, email) {
    const [result] = await pool.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);
    const id = result.insertId; // `insertId` is the ID of the inserted row
    return getNote(id);
}








