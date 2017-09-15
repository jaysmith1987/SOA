var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');


var User = new Schema({
    username: {
        type:String,
        index:true
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
});

User.pre('save', function(next){
    var user = this;
    bcrypt.hash(user.password, null, null, function(err, hash){
        if(err) return next(err);
        user.password = hash;
        next()
    });
});

User.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

 module.exports = mongoose.model('users', User);


