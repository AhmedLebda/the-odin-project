import { validationResult } from "express-validator";
import validateSignup from "../middlewares/validation/signup_form.mjs";
import validateLogin from "../middlewares/validation/login_form.mjs";
import userModel from "../models/user_model.mjs";
import {
    createAccessToken,
    createRefreshToken,
    isValidRefreshToken,
} from "../utils/auth.mjs";

// ## Refresh controllers ## //
const refresh_access = async (req, res, next) => {
    const refreshToken = req.cookies.RefreshToken;
    try {
        const decoded = isValidRefreshToken(refreshToken);
        const newAccessToken = createAccessToken({
            id: decoded.id,
            status: decoded.status,
        });
        res.json({ token: newAccessToken });
    } catch (error) {
        res.cookie(refreshToken, "", {
            httpOnly: true,
            maxAge: 0,
            path: "/api/auth/refresh",
        });
        res.status(401).json({ error: "Can't refresh your access token" });
    }
};

// ## Log-in Controllers ## //
const login_post = [
    validateLogin,

    async (req, res) => {
        const errors = validationResult(req);

        const { email, password } = req.body;

        if (!errors.isEmpty()) {
            res.json({ errors: errors.array() });
            return;
        }

        try {
            // Check if email is in db and password is correct
            const user = await userModel.logUser(email, password);

            // create refresh and access tokens
            const refreshToken = createRefreshToken({
                id: user._id,
                status: user.status,
            });
            const accessToken = createAccessToken({
                id: user._id,
                status: user.status,
            });

            // Send cookie with refresh token
            res.cookie("RefreshToken", refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
                path: "/api/auth/refresh",
            });

            // Send json response with user data and access token
            res.json({
                user: {
                    id: user._id,
                    fullName: user.fullName,
                    email: user.email,
                    status: user.status,
                    token: accessToken,
                },
            });
        } catch (error) {
            res.status(401).json({ errors: [{ msg: error.message }] });
        }
    },
];

// ## Sign-up Controllers ## //
const signup_post = [
    validateSignup,

    async (req, res) => {
        const errors = validationResult(req);

        const user = new userModel(req.body);

        // request validation
        if (!errors.isEmpty()) {
            res.json({ errors: errors.array() });
            return;
        }

        try {
            // save created user to db
            await user.save();

            // create refresh and access tokens
            const refreshToken = createRefreshToken({
                id: user._id,
                status: user.status,
            });
            const accessToken = createAccessToken({
                id: user._id,
                status: user.status,
            });

            // Send cookie with refresh token
            res.cookie("RefreshToken", refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
                path: "/api/auth/refresh",
            });

            // Send json response with user data and access token
            res.json({
                user: {
                    id: user._id,
                    fullName: user.fullName,
                    email: user.email,
                    status: user.status,
                    token: accessToken,
                },
            });
        } catch (error) {
            // respond with error if the email already exists in db
            if (error.code === 11000) {
                res.status(409).json({
                    errors: [{ msg: "this email already exists" }],
                });
            }
        }
    },
];

// ## Log-out Controllers ## //
const logout_get = (req, res) => {
    res.cookie("RefreshToken", "", {
        httpOnly: true,
        maxAge: 0,
        path: "/api/auth/refresh",
    });
    res.json({ msg: "You logged out" });
};

export default { login_post, signup_post, logout_get, refresh_access };
