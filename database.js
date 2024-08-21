// const mysql = require("mysql2")
import mysql from 'mysql2'

// const dotenv = require('dotenv')
import dotenv from 'dotenv'
import { create } from 'domain'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise()


async function getNotes() {
    const [row] = await pool.query("SELECT * FROM `users` ")
    return row

}


async function getNote(id) {
    const [result] = await pool.query(`SELECT * FROM users WHERE usersid=?`, [id])
    return result[0]
}


async function createNote(name,email){
    const result=await pool.query(
        `INSERT INTO users (name,email) VALUE (?,?)`,[name,email] )
       const id=result.insertId
       return getNote(id)
}

const result=await createNote('test','test')
console.log(result)



