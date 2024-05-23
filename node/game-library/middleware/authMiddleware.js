const jwt = require("jsonwebtoken");
const User = require("../models/user");

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, "my super secret secret", (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.redirect("/users/login");
            }
            console.log(decodedToken);
            next();
        });
    } else {
        res.redirect("/users/login");
    }
};

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(
            token,
            "my super secret secret",
            async (err, decodedToken) => {
                if (err) {
                    res.locals.username = null;
                    next();
                } else {
                    const user = await User.findById(decodedToken.id);
                    res.locals.username = user.username;
                    next();
                }
            }
        );
    } else {
        res.locals.username = null;
        next();
    }
};
module.exports = { requireAuth, checkUser };
