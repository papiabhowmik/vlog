import express from "express";
import { getAllUsers, login, register } from "../controllers/userController.js";
import { createPost, deletePost, getPost, getSinglePost, updatePost } from "../controllers/postController.js";
import { addComments, deleteComments, getComments, getSingleComments, updateComments } from "../controllers/commentsController.js";
import { postComments } from "../controllers/frontendController.js";
import {imageUpload} from "../middleware/uploadImage.js"

const router = express.Router()

router.get('/all-users',getAllUsers);
router.post("/register", register);
router.post("/login", login);

router.get("/get-post", getPost);
router.get("/get-single-post/:id", getSinglePost);
router.post("/add-post", imageUpload, createPost);
router.put("/update-post/:id", imageUpload, updatePost);
router.delete("/delete-post/:id",deletePost);

router.get("/get-comments", getComments);
router.get("/get-single-comment/:id", getSingleComments);
router.post("/add-comment", addComments);
router.put("/update-comment/:id", updateComments);
router.delete("/delete-comment/:id", deleteComments);

router.get("/post-comment/:post_id", postComments);

export default router;