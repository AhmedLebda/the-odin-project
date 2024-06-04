import { validationResult } from "express-validator";
import commentModel from "../models/comment_model.mjs";
import postModel from "../models/post_model.mjs";
import validateCommentCreate from "../middlewares/validation/commentCreate_form.mjs";

const comment_delete = async (req, res) => {
    try {
        await commentModel.findByIdAndDelete(req.params.id);

        const result = await postModel.updateOne(
            { comments: req.params.id },
            { $pull: { comments: req.params.id } }
        );

        res.json(result);
    } catch (err) {
        res.status(502).json({ errors: [{ msg: err.message }] });
    }
};

const comment_create = [
    validateCommentCreate,

    async (req, res) => {
        const errors = validationResult(req);

        const { content, author, postId } = req.body;
        const comment = new commentModel({ content, author });

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
        } else {
            try {
                await comment.save();
                await postModel.findByIdAndUpdate(postId, {
                    $push: { comments: comment },
                });
                res.json({
                    result: `your comment has been added to post: ${postId}`,
                });
            } catch (err) {
                res.status(502).json({ errors: [{ msg: err.message }] });
            }
        }
    },
];

const commentController = {
    comment_delete,
    comment_create,
};

export default commentController;
