/**
 * HomeController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

HomeController = {
    signup: function(req, res) {
        var email = req.param("email");
        var password = req.param("password");

        User.findByUsername(username).done(function(err, usr){
            if(err) {
                res.send(500, {error:"DB Error"});
            } else if(usr.length > 0) {
                res.send(400, {error: "Username already Taken"});
            } else {
                Users.create({email: email, password: password}).done(function(error, user){
                    if(error) {
                        res.send(500, {error: "DB Error"})
                    } else {
                        req.session.user = user;
                        res.send(user);
                    }
                })
            }
        });
    },
    login: function(req, res) {
        var username = req.param("username");
        var password = req.param("password");

        User.findOne({ username: username }).done(function(err, usr){
            if(err){
                res.send(500, {error: "DB Error"});
            } else {
                if(usr){
                    var hasher = require("password-hash");
                    if(hasher.verify(password, usr.password)){
                        req.session.user = usr;
                        res.send(usr);
                    } else{
                        res.send(400, {error: "Conraseña incorrecta"});
                    }
                }
                else{
                    res.send(400, {error: "Usuario no existe"});
                }
            }
        })
    }
};

module.exports = HomeController;