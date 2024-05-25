const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Not Ready Yet"));

module.exports = router;
