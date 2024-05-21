const Game = require("../models/game");
const Category = require("../models/category");

exports.games_list = async (req, res) => {
    try {
        const allGames = await Game.find({}, "name price").sort({ name: 1 });
        res.render("games_list", { title: "Games List", games_list: allGames });
    } catch (error) {
        console.log(error);
    }
};

exports.game_create_get = async (req, res) => {
    try {
        const categories = await Category.find().sort({ name: 1 });
        res.render("game_create", { title: "Game Create", categories });
    } catch (error) {
        console.log(error);
    }
};

exports.game_create_post = async (req, res) => {
    try {
        const game = new Game(req.body);
        await game.save();
        res.redirect("/games");
    } catch (error) {
        console.log(error);
    }
};

exports.game_detail = async (req, res) => {
    try {
        const id = req.params.id;
        const selectedGame = await Game.findById({ _id: id }).populate(
            "category"
        );
        res.render("game_details", {
            title: "Game Details",
            selected_game: selectedGame,
        });
    } catch (error) {
        console.log(error);
    }
};
