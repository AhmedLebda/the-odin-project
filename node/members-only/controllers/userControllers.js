const { body, validationResult } = require("express-validator");
const validateSignup = require("../middlewares/validation/signupValidation");
const userModel = require("../models/user_model");
const { createJWT } = require("./utils");

const login_get = (req, res) => {
    res.render("./user/login", { title: "Login", username: null });
};

// Sign-up controllers
const signup_get = (req, res) => {
    res.render("./user/signup", { title: "Signup", username: null });
};
const signup_post = [
    validateSignup,

    async (req, res) => {
        const errors = validationResult(req);

        const user = new userModel(req.body);

        if (!errors.isEmpty()) {
            res.json({ errors: errors.array() });
        } else {
            try {
                await user.save();
                const token = createJWT(user._id);
                res.cookie("jwt", token, {
                    httpOnly: true,
                    maxAge: 3 * 24 * 60 * 60 * 1000,
                });
                res.json({ redirect: "/" });
            } catch (error) {
                if (error.code === 11000) {
                    res.json({
                        errors: [{ msg: "this email already exists" }],
                    });
                }
            }
        }
    },
];

const membership_status_get = (req, res) => {
    res.render("./user/memberStatus", {
        title: "Membership Status",
        username: null,
    });
};

module.exports = { login_get, signup_get, signup_post, membership_status_get };
