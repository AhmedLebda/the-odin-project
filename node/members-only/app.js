const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

const index_Route = require("./routes/index");
const posts_Route = require("./routes/posts");
const user_Route = require("./routes/user");

// Initialize app
const app = express();

// db connection
mongoose
    .connect(process.env.db_URI)
    .then(() =>
        app.listen(process.env.PORT, () =>
            console.log("connected to members_only db")
        )
    )
    .catch((error) => console.log(error));

// Configurations
app.set("view engine", "ejs");

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/", index_Route);
app.use("/posts", posts_Route);
app.use("/user", user_Route);
