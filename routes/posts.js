const express = require("express");
const { getPosts, createPost, getPost, updatePost, deletePost } = require("../controllers/posts")

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);


module.exports = router;