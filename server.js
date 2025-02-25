import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import Connection from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
//config env
dotenv.config();

//rest object 
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use("/api/v1/user", userRoutes);

app.get('/', (req, res) => {
    res.status(200).send({
        "message":"Node server"
    })
})
const PORT = process.env.PORT || 8080;
//listen
Connection
    .query('SELECT 1').then(() => {
        console.log('MySql DB Connected');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error);
    })

