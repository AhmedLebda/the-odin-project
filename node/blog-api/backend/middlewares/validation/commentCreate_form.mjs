import { body } from "express-validator";

export default [
    body("content")
        .trim()
        .notEmpty()
        .withMessage("This field can't be empty")
        .escape(),
];
