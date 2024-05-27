const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

router.get("/login", userController.login_get);
router.post("/login", (req, res) => res.send("Not Ready Yet"));

router.get("/signup", userController.signup_get);
router.post("/signup", userController.signup_post);

router.get("/membership-status", userController.membership_status_get);
router.post("/membership-status", (req, res) => res.send("Not Ready Yet"));

module.exports = router;
