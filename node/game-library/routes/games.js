const express = require("express");
const router = express.Router();
const game_controller = require("../controllers/gamesController");

router.get("/", game_controller.games_list);
router.get("/create", game_controller.game_create_get);
router.post("/create", game_controller.game_create_post);
router.get("/:id", game_controller.game_detail);
router.delete("/:id/delete", game_controller.game_delete);

module.exports = router;
