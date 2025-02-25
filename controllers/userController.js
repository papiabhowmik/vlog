import db from "../config/db.js"
import JWT from 'jsonwebtoken';
import { comparePassword, hashPassword } from "../helper/authHelper.js";

export const getAllUsers = async (req, res) => {
    try{
        const data = await db.query("SELECT * FROM user");
        res.status(200).send(data[0])
    }catch(error){
        console.log(error);
        return res.status(500).send({
            message: 'Internal Server Error',
            success: false,
            error
        })
    }
}
export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email, !password){
            return res.status(404).send({
                success: false,
                message: "Enter email or password"
            })
        }
        const [user] = await db.query(`SELECT * FROM user WHERE email = ?`,[email]);
        if(!user.length > 0){
            return res.status(404).send({
                success: false,
                message: 'user is not register'
            })
        }
        const match = await comparePassword(password, user[0].password);
        if(!match){
            return res.status(400).send({
                success: false,
                message: 'Invalid username or password'
            })
        }else{
            const token = await JWT.sign({id:user.id}, process.env.JWT_SECRET,{expiresIn: "1d",});
            return res.status(200).send({
                message: "Login successfully",
                token,
            })
            // const accessToken = await JWT.sign({id:user.id}, process.env.ACCESS_SECRET,{ expiresIn: '15m', });
            // const refreshToken = await JWT.sign({id:user.id}, process.env.REFRESH_SECRET);
            // // const newToken = new Token({token: refreshToken})
            // await db.query(`INSERT INTO token (name) VALUES (?)`,[refreshToken]);

            // return res.status(200).json({accessToken: accessToken, refreshToken: refreshToken, email: email})
        }
        
    }catch(error){
        console.log(error);
        return res.status(500).send({
            message: 'Internal Server Error',
            success: false,
            error
        })
    }
}
export const register = async (req, res) => {
    try{
        const {username, email, password} = req.body;
        //validation
        if(!username || !email || !password){
            return res.status(400).send({
                success: false,
                message: "Please fill all fields"
            })
        }
        //if user already exist
        const [exist] = await db.query(`SELECT * FROM user where email = ?`,[email]);
        if(exist.length > 0){
            return res.status(401).send({
                success: false,
                message: "User already exist please login",
            })
        }
        //create new user
        const hashedPassword = await hashPassword(password);
        const user = await db.query(`INSERT INTO user (username, email, password) VALUES (?,?,?)`,[username, email, hashedPassword]);
        const token = await JWT.sign({id:user.id}, process.env.JWT_SECRET,{expiresIn: "1d",});
            
        return res.status(201).send({
            success: true,
            message: "User Register Successfully",
            token,
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            message: 'Internal Server Error',
            success: false,
            error
        })
    }
}
 
 