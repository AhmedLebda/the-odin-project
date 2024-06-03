import { Schema, model } from "mongoose";

const commentModel = new Schema(
    {
        content: {
            type: String,
            required: [true, "Your comment can't be empty"],
        },
        Author: {
            type: Schema.Types.ObjectId,
            ref: "Users",
        },
    },
    {
        timestamps: true,
    }
);

export default model("Comment", commentModel);
