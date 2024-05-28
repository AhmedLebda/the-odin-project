const { body } = require("express-validator");

module.exports = [
    body("password")
        .trim()
        .notEmpty()
        .withMessage("This field can't be empty")
        .escape(),
];
