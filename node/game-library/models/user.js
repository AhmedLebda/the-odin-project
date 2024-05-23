const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "please enter a username"],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "please enter a password"],
        minlength: [6, "Your password must be longer than 6 characters"],
    },
});

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function (username, password) {
    const user = await this.findOne({ username });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw new Error("Invalid password");
    }
    throw new Error("Invalid username");
};

module.exports = mongoose.model("Users", userSchema);
