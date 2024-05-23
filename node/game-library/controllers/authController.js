const User = require("../models/user");
const jwt = require("jsonwebtoken");

const handleErrors = (error) => {
    const errors = { username: "", password: "" };
    if (error.message === "Invalid username") {
        errors.username = error.message;
        return errors;
    }
    if (error.message === "Invalid password") {
        errors.password = error.message;
        return errors;
    }
    if (error.code === 11000) {
        errors.username = "This username already exists";
    } else {
        // console.log(error.message);
        if (error.message.includes("Users validation failed")) {
            Object.values(error.errors).forEach(
                ({ properties }) =>
                    (errors[properties.path] = properties.message)
            );
        }
    }
    return errors;
};

const createToken = (id) => {
    return jwt.sign({ id }, "my super secret secret", {
        expiresIn: 3 * 24 * 60 * 60,
    });
};

exports.signup_get = (req, res) => {
    res.render("users/signup", { title: "Sign-up", errors: false });
};

exports.signup_post = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = createToken(user._id);
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000,
        });
        res.status(201).redirect("/");
    } catch (error) {
        const errors = handleErrors(error);
        console.log(errors);
        res.status(400).render("users/signup", { title: "Sign-up", errors });
    }
};

exports.login_get = (req, res) => {
    res.render("users/login", { title: "Login", errors: false });
};
exports.login_post = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.login(username, password);
        const token = createToken(user._id);
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000,
        });
        res.status(201).redirect("/");
    } catch (error) {
        const errors = handleErrors(error);
        console.log(errors);
        res.status(400).render("users/login", { title: "Sign-up", errors });
    }
};
exports.logout_get = (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
};
