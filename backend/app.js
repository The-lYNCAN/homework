const express = require("express")
const app = express()
const Uses = require("./uses")
const Login = require("./routes/login")
const passport = require("passport")
const initialize = require("./passport")
const fileUpload = require("express-fileupload")
const url = "mongodb+srv://admin:iamgreat@cluster0.ehcus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mongoose = require("mongoose")

mongoose.connect(url, {}, () => {
    app.listen(8000, () => {
        console.log("server fired up on port 8000. Please visit http://localhost:8000 to visit the website");
    })
})

app.use(fileUpload())
Uses(app)
app.use(passport.initialize())
app.use(passport.session())
initialize(passport)
app.use("/auth", Login)

app.get("/", (req, res) => {
    res.send("Index Page for homework server")
})

app.get("/test", (req, res) => {
    res.json({test: "test api"})
})

app.get("/auth_login", (req, res) => {
    res.send("<form method='post'><input name='username' /><input name='password' /><button type='submit'>Submit</button></form>")
})

app.post("/auth_login", (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/suckcess",
        failureRedirect: "/failiure"
    })(req, res, next)
})

app.get("/upload", (req, res) => {
    res.send("<form method='post'><input id='fileinput' name='pdffile' type='file' multiple /><input type='submit' /></form>")
})

app.post("/upload", (req, res) => {
    console.log(req.files);
    res.send("checking for files.....")
})