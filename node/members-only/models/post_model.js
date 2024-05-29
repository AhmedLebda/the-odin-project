const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: ["true", "messages must have a title"],
            minlength: [3, "Title is too short"],
        },
        content: {
            type: String,
            required: ["true", "posts must have content"],
        },
        author: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Post", postSchema);
