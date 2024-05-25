const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>
    res.render("./posts/postsList", { title: "Test", username: null })
);

router.get("/create", (req, res) => res.send("Not Ready Yet"));
router.post("/create", (req, res) => res.send("Not Ready Yet"));

module.exports = router;
