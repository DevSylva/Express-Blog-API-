const express = require("express");
const { getPosts, createPost, getPost, updatePost, deletePost } = require("../controllers/posts")
const veryAuth = require("../utils/verifyauth")

const router = express.Router();

router.get("/", veryAuth, getPosts);
router.post("/", veryAuth, createPost);
router.get("/:id", veryAuth, getPost);
router.put("/:id", veryAuth, updatePost);
router.delete("/:id", veryAuth, deletePost);


module.exports = router;