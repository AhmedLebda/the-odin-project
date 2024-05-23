const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const gamesRouter = require("./routes/games");
const categoriesRouter = require("./routes/category");
const authRouter = require("./routes/authRoutes");
const Game = require("./models/game");
const Category = require("./models/category");
const cookieParser = require("cookie-parser");

const { requireAuth, checkUser } = require("./middleware/authMiddleware");

const PORT = 3000;

// Init express app
const app = express();

// game_library db
const URI =
    "mongodb+srv://ahmed:ahmedtest321@cluster0.kvuglqr.mongodb.net/game_library?retryWrites=true&w=majority&appName=Cluster0";
mongoose
    .connect(URI)
    .then(() =>
        app.listen(PORT, () => console.log("Connected to 'game_library' db"))
    )
    .catch((err) => console.log(err));

// Configurations
app.set("view engine", "ejs");

// middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(checkUser);

// Routes
app.get("/", async (req, res) => {
    const [gamesCount, categoriesCount] = await Promise.all([
        Game.find().countDocuments(),
        Category.find().countDocuments(),
    ]);
    res.render("index", {
        title: "Home",
        games_count: gamesCount,
        categories_count: categoriesCount,
    });
});

app.use("/users", authRouter);

app.use(requireAuth);

app.use("/games", gamesRouter);

app.use("/categories", categoriesRouter);
