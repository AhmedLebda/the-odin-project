import { Schema, model } from "mongoose";

const commentModel = new Schema(
    {
        content: {
            type: String,
            required: [true, "Your comment can't be empty"],
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "Users",
            required: [true, "comment must have an author"],
        },
    },
    {
        timestamps: true,
    }
);

export default model("Comment", commentModel);
