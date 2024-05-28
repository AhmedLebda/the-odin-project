const { validationResult } = require("express-validator");
const validateSignup = require("../middlewares/validation/signupValidation");
const validateLogin = require("../middlewares/validation/loginValidation");
const validateStatus = require("../middlewares/validation/statusValidation");
const userModel = require("../models/user_model");
const { createJWT, isValidJWT } = require("./utils");

// ### Log-in Controllers ### //
const login_get = (req, res) => {
    res.render("./user/login", { title: "Login" });
};
const login_post = [
    validateLogin,

    async (req, res) => {
        const errors = validationResult(req);

        const { email, password } = req.body;

        if (!errors.isEmpty()) {
            res.json({ errors: errors.array() });
        } else {
            try {
                const user = await userModel.logUser(email, password);
                const payload = {
                    fullName: user.fullName,
                    email: user.email,
                    status: user.status,
                };
                const token = createJWT(payload);
                res.cookie("jwt", token, {
                    httpOnly: true,
                    maxAge: 3 * 24 * 60 * 60 * 1000,
                });
                res.json({ redirect: "/" });
            } catch (error) {
                res.json({ errors: [{ msg: error.message }] });
            }
        }
    },
];

// ### Sign-up Controllers ### //
const signup_get = (req, res) => {
    res.render("./user/signup", { title: "Signup" });
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
                const payload = {
                    fullName: user.fullName,
                    email: user.email,
                    status: user.status,
                };
                const token = createJWT(payload);
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

// ### Log-out Controllers ### //
const logout_get = (req, res) => {
    res.cookie("jwt", "", { httpOnly: true, maxAge: 1 });
    res.redirect("/");
};

// ### Membership-status Controllers ### //
const membership_status_get = (req, res) => {
    res.render("./user/memberStatus", {
        title: "Membership Status",
    });
};
const membership_status_post = [
    validateStatus,

    async (req, res) => {
        const errors = validationResult(req);
        const { password } = req.body;

        if (!errors.isEmpty()) {
            res.json({ errors: errors.array() });
        } else if (password === process.env.MEMBER_PASSWORD) {
            try {
                const decoded = isValidJWT(req.cookies.jwt);
                const user = await userModel.findOneAndUpdate(
                    { email: decoded.email },
                    { status: "member" },
                    { new: true }
                );
                const payload = {
                    fullName: user.fullName,
                    email: user.email,
                    status: user.status,
                };
                const token = createJWT(payload);
                res.cookie("jwt", token, {
                    httpOnly: true,
                    maxAge: 3 * 24 * 60 * 60 * 1000,
                });
                res.json({ redirect: "/" });
            } catch (error) {
                res.json({
                    errors: [{ msg: error.message }],
                });
            }
        } else {
            res.json({
                errors: [{ msg: "Incorrect password" }],
            });
        }
    },
];

module.exports = {
    login_get,
    login_post,
    signup_get,
    signup_post,
    logout_get,
    membership_status_get,
    membership_status_post,
};
