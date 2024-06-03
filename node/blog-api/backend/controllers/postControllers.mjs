import postModel from "../models/post_model.mjs";
import { validationResult } from "express-validator";
import validatePostCreate from "../middlewares/validation/postCreate_form.mjs";

/* ------------------------------------
! Queries: sort and page
* Sort: date (descending order)
* Page Limit : 10
------------------------------------ */
const posts_list = async (req, res) => {
    try {
        const LIMIT = 10;

        const sortQuery = req.query.sort;
        let sort = { createdAt: 1 };

        const pageQuery = +req.query.page - 1;
        let skip = pageQuery * LIMIT;

        if (sortQuery === "latest") sort = { createdAt: -1 };

        if (skip > (await postModel.countDocuments())) {
            skip = 0;
        }

        const posts = await postModel.find().limit(LIMIT).skip(skip).sort(sort);

        res.json(posts);
    } catch (err) {
        res.status(502).json({ errors: [{ msg: err.message }] });
    }
};

const post_detail = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id);
        res.json(post);
    } catch (err) {
        res.status(502).json({ errors: [{ msg: "This post doesn't exist" }] });
    }
};

const post_delete = async (req, res) => {
    try {
        const post = await postModel.findByIdAndDelete(req.params.id);
        res.json(post);
    } catch (err) {
        res.status(502).json({ errors: [{ msg: "This post doesn't exist" }] });
    }
};

const post_create = [
    validatePostCreate,

    async (req, res) => {
        const errors = validationResult(req);
        const post = new postModel(req.body);

        if (!errors.isEmpty()) {
            res.json({ errors: errors.array() });
        } else {
            try {
                await post.save();
                res.status(201).json(post);
            } catch (err) {
                res.status(502).json({ errors: [{ msg: err.message }] });
            }
        }
    },
];

const postController = { posts_list, post_detail, post_delete, post_create };
export default postController;
