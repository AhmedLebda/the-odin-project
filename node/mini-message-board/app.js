const express = require("express");
const path = require("path");
const { messages } = require("./messages");

const PORT = 3000;

// Init express app
const app = express();

// Starting server on port 3000
app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});

// Configurations
app.set("view engine", "ejs");

// middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.render("index", { title: "Home", messages });
});

app.get("/new", (req, res) => {
    res.render("new", { title: "Create" });
});

app.post("/new", (req, res) => {
    messages.push({ ...req.body, added: new Date() });
    res.redirect("/");
});
