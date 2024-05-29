const { validationResult } = require("express-validator");
const postModel = require("../models/post_model");
const validatePostCreate = require("../middlewares/validation/postCreateValidation");
const { isValidJWT } = require("./utils");

const posts_list = async (req, res) => {
    try {
        const posts = await postModel.find().sort({ createdAt: -1 });
        console.log(posts);
        res.render("./posts/postsList", { title: "Posts", postsList: posts });
    } catch (error) {
        console.log(error);
    }
};

const post_create_get = (req, res) => {
    res.render("./posts/post_create", { title: "Create post" });
};

const post_create_post = [
    validatePostCreate,

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({ errors: errors.array() });
        } else {
            const decoded = isValidJWT(req.cookies.jwt);
            const post = new postModel({
                ...req.body,
                author: decoded.fullName,
            });
            try {
                await post.save();
                res.json({ redirect: "/posts" });
            } catch (error) {
                console.log(error);
                res.json({ errors: [{ msg: "something wen't wrong" }] });
            }
        }
    },
];

module.exports = { posts_list, post_create_get, post_create_post };
