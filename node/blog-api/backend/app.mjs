import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import index_Route from "./routes/index.mjs";
import user_Routes from "./routes/user.mjs";
import post_Routes from "./routes/post.mjs";
import comment_Routes from "./routes/comment.mjs";

import { checkUser, requireAuth } from "./middlewares/auth/authMiddleware.mjs";

// Init express app
const app = express();

//! db connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() =>
        app.listen(process.env.PORT, () =>
            console.log("Connected to <blog_api> db")
        )
    )
    .catch((err) => console.log(err.message));

//! middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Checks if there is a user logged in by validating the jwt token in cookies
app.use(checkUser);

//! Routes
app.use("/", index_Route);
app.use("/user", user_Routes);
app.use("/posts", post_Routes);
app.use("/comment", comment_Routes);
