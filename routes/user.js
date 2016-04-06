var mongoose = require('mongoose');
var User = require('../models/user');

// app/routes.js
module.exports = function(app, passport) {

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));


    app.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    });
 
    app.post('/login', function(req, res, next) {
      passport.authenticate('local-login', function(err, user, info) {
        console.log('login post', info.message);
        if (err) { return next(err); }
        if (!user) { return res.status(404).json(info.message);}
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.json({message: "you did it"});
        });
      })(req, res, next);
    });
    
    app.get('/login', function(req, res) {
       // render the page and pass in any flash data if it exists
      
      res.send((req.user ? req.user.local.email : undefined) + " logged in");
    });

    app.get('/logout', function(req, res) {
       req.logout();
       res.redirect('/');
    });
    

};