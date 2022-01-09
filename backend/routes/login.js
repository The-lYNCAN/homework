const express = require("express")
const route = express.Router()
const mongoose = require("mongoose")
const user = require("../models/user")

route.get("/", (req, res) => {
    res.send("Auth Index")
})

route.get("/create", (req, res) => {
    const addUser = new user({
        username: "test",
        name: "Test Test",
        password: "TestPassword",
        class: "11",
        Section: "A",
        Course: "None"
    })
    console.log(addUser);
    addUser.save()
    res.send("User Create")
})

route.get("/test", (req, res) => {
    res.send(req.user)
})

route.get("/get", (req, res) => {
    res.send(req.user)
})

module.exports = route