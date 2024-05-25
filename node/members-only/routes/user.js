const express = require("express");
const router = express.Router();

router.get("/login", (req, res) =>
    res.render("./user/login", { title: "Test", username: null })
);
router.post("/login", (req, res) => res.send("Not Ready Yet"));

router.get("/signup", (req, res) =>
    res.render("./user/signup", { title: "Test", username: null })
);
router.get("/signup", (req, res) => res.send("Not Ready Yet"));

router.get("/membership-status", (req, res) =>
    res.render("./user/memberStatus", { title: "Test", username: null })
);
router.post("/membership-status", (req, res) => res.send("Not Ready Yet"));

module.exports = router;
