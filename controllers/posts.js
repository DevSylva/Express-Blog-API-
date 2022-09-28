const PostMessage = require("../models/postMessage")

exports.getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

exports.createPost = async (req, res) => {
    post = req.body

    const newPost = new PostMessage(post)
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}


exports.getPost = async (req, res) => {
    const id = req.params.id;

    await PostMessage.findById(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({ message: "Post with " + id + " not found" });
            } else {
                res.send(data);
        }
        })
        .catch((err) => {
            res.status(500).send({ messsage: "Error retrieving post with id " + id });
    })
}

exports.updatePost = async (req, res) => {
    const id = req.params.id;

    await PostMessage.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(404).send({ message: `cannot update user with ${id}. Maybe user not found!` });
            } else {
                res.send(data);
            }
        })
        .catch((err) => {
            res.status(500).send({ message: "Error Updating Post information" })
        });
};


exports.deletePost = async (req, res) => {
    const id = req.params.id;

    await PostMessage.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({ message: `cannot delete with id &{id}. maybe the id is wrong` });
            } else {
                res.send({
                    messae: "Post was deleted successfully."
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Post with id " + id
            });
        });
};