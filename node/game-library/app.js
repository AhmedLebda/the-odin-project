const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const gamesRouter = require("./routes/games");
const genreRouter = require("./routes/genre");

const PORT = 3000;

// Init express app
const app = express();

// game_library db
const URI =
    "mongodb+srv://ahmed:ahmedtest321@cluster0.kvuglqr.mongodb.net/game_library?retryWrites=true&w=majority&appName=Cluster0";
mongoose
    .connect(URI)
    .then(() => console.log("Connected to 'game_library' db"))
    .catch((err) => console.log(err));

// Configurations
app.set("view engine", "ejs");

// middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

app.use("/games", gamesRouter);

app.use("/genres", genreRouter);
