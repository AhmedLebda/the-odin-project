const { body } = require("express-validator");

module.exports = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("This field can't be empty")
        .isLength({ max: 50 })
        .withMessage("title can't be longer than 50 chars")
        .escape(),

    body("content")
        .trim()
        .notEmpty()
        .withMessage("This field can't be empty")
        .isLength({ max: 250 })
        .withMessage("content can't be longer than 250 chars")
        .escape(),
];
