import { body } from "express-validator";

export default [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("This field can't be empty")
        .escape(),

    body("content")
        .trim()
        .notEmpty()
        .withMessage("This field can't be empty")
        .escape(),
];
