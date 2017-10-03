var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var secret = 'v@#$Yinsert&(/3';


var User = require('../models/users');


/* GET home page. */

router.get('/api/json', function(req,res){
 res.sendfile('SampleJSONPayload.json')
 
})

router.get('/api/users', function(req,res){
   User.find(function(err, users){
     if(err)
      res.send(err);

      res.json(users);
   });
});


router.get('*', function(req, res, next) {
  res.sendFile('./client/public/index.html');
});



router.post('/api/users', function(req,res){
  var user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.password = req.body.password;

  user.save(function(err){
    if(err){
      res.json({success: false, message: 'Username or Email already exists!'});
    } else {
      res.json({success: true, message: 'User created'});
    }
  });
});

router.post('/api/login', function(req, res){
  User.findOne({ username: req.body.username }).select('email username password').exec(function(err, user){
    if(err) throw err;
    
    if(!user){
      res.json({ success: false, message: 'Could not authenticate user'});
    } else if (user) {
      if(req.body.password) {
        var validPassword = user.comparePassword(req.body.password);
      } else {
        res.json({ success: false, message: 'No password provided'});
      }
      if(!validPassword){
        res.json({ success: false, message: 'Could not authenticate password'});
      } else {
        var token = jwt.sign({username: user.username, email: user.email},secret,{expiresIn: '24h'});
        res.json({ success: true, message: 'User authenticated!', token: token});
      }
    }
  });
});


router.get('api/logout', function(req,res){
  console.log('logging out');
  req.logout();
  res.send(200)
});






module.exports = router;
