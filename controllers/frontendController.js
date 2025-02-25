import db from '../config/db.js';

export const postComments = async (req, res) => {
    try{
        const post_id = req.params.post_id;
        const comment = await db.query(`SELECT * FROM comments WHERE post_id = ?`,[post_id]);
        console.log(post_id);
        return res.status(200).send(comment[0]);
    }catch(error){
        return res.status(500).send({message: "Internal server error", error})
    }
    
}