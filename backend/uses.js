const cors = require("cors")
const bodyParser = require("body-parser")
const expressSession = require("express-session")

function Uses(app){
    app.use(cors({
        origin: true,
        credentials: true
    }));
    app.use(bodyParser({}))
    app.use(expressSession({
        secret: "my favrate password",
        resave: false,
        saveUninitialized: false
    }))

}

module.exports = Uses