var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


var userSchema = mongoose.Schema({
    username: {
        type:String,
        index:true
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type:String
    }
});

var User = module.exports = mongoose.model('user', userSchema);

module.exports.createUser = function(newUser, callback){
        bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
                newUser.password = hash;
                newUser.save(function(err){
                    var token;
                    token = user.generateJwt();
                    res.status(200);
                    res.json({
                        "token": token
                    })
                });
        });
    }); 
}

module.exports.getUserByUsername = function(username, callback){
    var query = {username: username};
    User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch){
        if(err) throw err;
        callback(null, isMatch);
    });
}

module.exports.generateJwt = function(){
    var expire = new Date()
    expire.setDate(expire.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expire.getTime()/1000),
    }, "soaparadyme");
}