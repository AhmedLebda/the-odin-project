const express = require("express");
const router = express.Router();
const category_controller = require("../controllers/categoryController");

router.get("/", category_controller.categories_list);
router.get("/create", category_controller.category_create_get);
router.post("/create", category_controller.category_create_post);
router.get("/:id", category_controller.category_detail);

module.exports = router;
