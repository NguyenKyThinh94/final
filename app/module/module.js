const mongoose = require('mongoose')
let UserSchema = mongoose.Schema({
    user: String,
    pass: String,
    email: String
  });
UserSchema.methods.getUser = function () {
    return this.user;
}
UserSchema.methods.getPass = function () {
  return this.pass;
}
UserSchema.methods.getEmail = function () {
  return this.email;
}
module.exports = mongoose.model('User', UserSchema)
