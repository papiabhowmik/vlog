import db from '../config/db.js';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const createPost = async (req, res) => {
    try{
        const {title, description, user_id} = req.body;
        const image = req.files['image'] ? req.files['image'][0].filename : null;
        await db.query(`INSERT INTO post(title, description, image, user_id)VALUES(?,?,?,?)`,[title, description, image, user_id]);
        return res.status(200).json({Message: "Create Post successfully"});
    }catch(error){
        return res.status(500).send({message: "Server error", error});
    }
    
}

export const getPost = async (req, res) => {
    try{
        const post = await db.query(`SELECT * FROM post`);
        return res.status(200).send(post[0]);
    }catch(error){
        return res.status(500).send({message: "server Error",error})
    }
}

export const getSinglePost = async (req, res) => {
    try{
        const id = req.params.id;
        const post = await db.query(`SELECT * FROM post WHERE id = ?`,[id]);
        console.log(id);
        return res.status(200).send(post[0],);
    }catch(error){
        return res.status(500).send({message: "Server error"})
    }
}

export const updatePost = async (req, res) => {
    try{
        const { id } = req.params;
        const { title, description} = req.body;
        const image = req.files['image'] ? req.files['image'][0].filename : null;
        const [exists] = await db.query(`SELECT * FROM post WHERE id = ? `,[id]);
        if(!exists.length > 0){
            return res.status(404).send({message: "post does not exists"});
        }
        let post;
        const oldImage = exists[0].image;

        if(image == null){
            const result = await db.query( `UPDATE post SET title = ?, description = ? WHERE id = ?`, [title, description, id]);
            post = result[0];
        }
        else{
            if(oldImage){
                const __filename = fileURLToPath(import.meta.url);
                const __dirname = dirname(__filename);
                const imagePath = join(__dirname, '..', 'upload', oldImage);
                try {
                    fs.unlinkSync(imagePath);  // Delete the old image file
                    console.log(`Deleted old image: ${imagePath}`);
                } catch (err) {
                    console.error('Error deleting old image:', err);
                }
            }
            const result = await db.query( `UPDATE post SET title = ?, description = ?, image = ? WHERE id = ?`, [title, description, image, id]);
            post = result[0];
        }
        
        return res.status(200).send({ message: "Update post successfully", post });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).send({ message: "Server error", error });
    }
}

export const deletePost = async (req, res) => {
    try{
        const id = req.params.id;
        const [exist] = await db.query(`SELECT * FROM post WHERE id = ?`,[id]);
        
        if(!exist.length){
            return res.status(404).json({message: "Post not found"});
        }

        const image = exist[0].image;

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        if(image){
            const imagePath = join(__dirname, '..', 'upload', image);
            // console.log(imagePath);  
            
            fs.unlinkSync(imagePath);
        }
        
        
        await db.query(`DELETE FROM post WHERE id = ?`,[id]);
        return res.status(200).send({message: "Post Deleted successfully"});
        
    }catch(error){
        return res.status(500).send({message: "Server error", error});
    }
}
