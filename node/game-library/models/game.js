const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    price: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: "Users" },
});

gameSchema.virtual("url").get(function () {
    return `/games/${this._id}`;
});

module.exports = mongoose.model("Game", gameSchema);
