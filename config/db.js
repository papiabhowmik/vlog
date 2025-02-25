import mysql from "mysql2/promise";

const Connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'vlog',
    // host: process.env.HOST,
    // user: process.env.USER,
    // password: process.env.PASSWORD,
    // databse: process.env.DATABASE
});
export default Connection;

 