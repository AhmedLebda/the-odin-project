#! /usr/bin/env node

console.log(
    `=============================================
    --> This script populates some test games and categories to your database.
    --> Usage: node populateDB "mongodb+srv://coolUser:coolpassword@cluster0.lz91hw2.mongodb.net/game_library?retryWrites=true&w=majority"
    =============================================`
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Game = require("./models/game");
const Category = require("./models/category");
const mongoose = require("mongoose");

const categories = [];

const URI = userArgs[0];

const categoryCreate = async (index, categoryName) => {
    const category = new Category({ name: categoryName });
    await category.save();
    categories[index] = category;
    console.log(`Added Category: ${categoryName}`);
};

const gameCreate = async (gameName, description, category, price) => {
    const gameDetails = {
        name: gameName,
        description,
        price,
    };

    if (category != false) gameDetails.category = category;

    const game = new Game(gameDetails);
    await game.save();
    console.log(`Added Game: ${gameName}`);
};

const create_Categories = async () => {
    await Promise.all([
        categoryCreate(0, "survival"),
        categoryCreate(1, "action"),
        categoryCreate(2, "fighting"),
        categoryCreate(3, "sports"),
    ]);
};

const create_games = async () => {
    await Promise.all([
        gameCreate(
            "EA Sports FC 24",
            "EA Sports FC 24 is an association football-themed simulation video game developed by EA Vancouver and EA Romania and published by EA Sports.",
            [categories[3]],
            55
        ),
        gameCreate(
            "Tony Hawk's Pro Skater 1 + 2",
            "Tony Hawk's Pro Skater 1 + 2 is a 2020 skateboarding video game developed by Vicarious Visions and published by Activision.",
            [categories[3]],
            65
        ),
        gameCreate(
            "Minecraft",
            "Minecraft is a 2011 sandbox game developed by Mojang Studios and originally released in 2009.",
            [categories[0]],
            35
        ),
        gameCreate(
            "Street Fighter 6",
            "Street Fighter 6 is a 2023 fighting game developed and published by Capcom. ",
            [categories[2], categories[1]],
            53
        ),
        gameCreate(
            "Elden Ring",
            "Elden Ring is a 2022 action role-playing game developed by FromSoftware.",
            [categories[1]],
            61
        ),
    ]);
};

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(URI);
    console.log("Debug: Should be connected?");
    await create_Categories();
    await create_games();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}
