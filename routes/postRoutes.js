import express from 'express';

import Post from '../models/postModel.js';

const router = express.Router();

// Create post
router.post("/create", async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            category: req.body.category,
            place: req.body.place,
            excrept: req.body.excrept,
            body: req.body.body,
            image: req.body.image
        });

        const post = await newPost.save();

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Edit/Update post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        try {
            const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });

            res.status(200).json(updatedPost);
        } catch (error) {
            res.status(500).json(error);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get post by ID
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Get posts by category
router.get("/?", async (req, res) => {
    const catName = req.query.cat;
    try {
        const post = await Post.find({
            category: {
                $in: [catName]
            }
        });

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});


// Get all posts
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Delete post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        try {
            await post.delete();

            res.status(200).json("Post deleted");
        } catch (error) {
            res.status(500).json(error);
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

export default router;