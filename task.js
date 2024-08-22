
import mysql from "mysql2";
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

export async function taskquery(){
    const [rows] = await pool.query("SELECT * FROM `tasks`");
    return rows;
}

export async function insertid(id){
    const [row] = await pool.query("SELECT * FROM `tasks` WHERE id=?", [id]);
    return row[0];
}


export async  function insertintovalue(task,description,userid){
    const [result]=await pool.query("INSERT INTO `tasks` ( `tasks`, `description`,`userid`) VALUES(?,?,?)",[task,description,userid])
    const id = result.insertId
    return insertid(id)

}


export async function getTaskWithUser(){
    const [result] = await pool.query("SELECT * from tasks LEFT JOIN users ON tasks.userid = users.usersid");
    return result;
}


console.log("succes ful ")