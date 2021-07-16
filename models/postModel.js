import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: Array,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    excrept: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Posts = mongoose.model("posts", PostSchema);
export default Posts;