const jwt = require("jsonwebtoken");

const createJWT = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "24h",
    });
};

module.exports = { createJWT };
