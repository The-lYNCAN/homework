const Local = require("passport-local")
const Users = require('./models/user')

function initialize(passport){
    passport.use(new Local({usernameField: "username"}, (username, password, done) => {
        // console.log("trying to find");
        Users.find({username: username}, (error, user) => {
            if(!error){
                // console.log("found the imperfect match");
                if(password === user[0].password){
                    console.log("found the perfect match");
                    return done(null, user[0])
                }else{
                    console.log(password);
                    console.log(user[0].password);
                    console.log(user);
                    return done("password incorrect", null)
                }
            }else{
                return done(error, false)
            }
        })
    }))

    passport.serializeUser(function(user, done) {
        return done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        Users.findById(id, (err, user) => {
            return done(err, user)
        })
        // done(err, {username: "test username", _id: "9568721ga_7987584", insta: "de.lyncan"});
    });
}

module.exports = initialize