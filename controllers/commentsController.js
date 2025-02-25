import db from '../config/db.js';

export const addComments = async (req, res) => {
    try{
        const {name, post_id, user_id} = req.body;
        const com = await db.query(`INSERT INTO comments(name, post_id, user_id)VALUES(?,?,?)`,[name, post_id, user_id]);
        return res.status(200).json({message: "Comments added successfully"});
    }catch(error){
        return res.status(500).send({error: error});
    }
}
export const getComments = async (req, res) => {
    try{
        const com = await db.query(`SELECT * FROM comments`);
        return res.status(200).json(com[0]);
    }catch(error){
        return res.status(500).json({error: error});
    }
}
export const getSingleComments = async (req, res) => {
    try{
        const id = req.params.id;
        const com = await db.query(`SELECT * FROM comments WHERE id = ?`,[id]);
        if(!com){
            return res.status(500).send({message: "Comments not exist"});
        }
        return res.status(200).json(com[0]);
    }catch(error){
        return res.status(500).json({error: error});
    }
}
export const updateComments = async (req, res) => {
    try{
        const id = req.params.id;
        const {name} = req.body;
        const [exist] = await db.query(`SELECT * FROM comments WHERE id = ?`,[id]);
        console.log(!exist.length > 0);
        if(!exist.length > 0){
            return res.status(404).send({message: "Comments not exist"})
        }
        else{
            await db.query(`UPDATE comments SET name = ? WHERE id = ?`,[name, id]);
            return res.status(200).send({message: "Comment updated successfully"});
        }
        
    }catch(error){
        return res.status(500).json({error: error});
    }
}
export const deleteComments = async (req, res) => {
    try{
        const id = req.params.id;
        const [exist] = await db.query(`SELECT * FROM comments WHERE id = ? `,[id]);
        if(!exist.length > 0){
            return res.status(404).json({message: "Message not found"});
        }
        return res.status(200).send({message: "Message deleted successfully"});
    }catch(error){
        return res.status(500).json({error: error})
    }
}