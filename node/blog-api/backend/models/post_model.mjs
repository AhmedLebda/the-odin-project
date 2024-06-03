import { Schema, model } from "mongoose";

const postModel = new Schema(
    {
        title: {
            type: String,
            required: [true, "please enter a title for your post"],
            maxLength: [150, "your title is too long"],
            minLength: [2, "your name is too short!"],
        },
        content: {
            type: String,
            required: [true, "Your post can't be empty"],
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
        comments: {
            type: [Schema.Types.ObjectId],
            ref: "Comments",
        },
    },
    {
        timestamps: true,
    }
);

export default model("Post", postModel);
