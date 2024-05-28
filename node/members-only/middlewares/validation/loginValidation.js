const { body } = require("express-validator");

module.exports = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("This field can't be empty")
        .isEmail()
        .withMessage("Please enter a valid email")
        .escape(),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("This field can't be empty")
        .escape(),
];
