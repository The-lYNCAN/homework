const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    name: String,
    class: String,
    section: String,
    course: String
})

module.exports = mongoose.model("User", Schema)