var mongoose = require('mongoose');


var User = mongoose.model('User', {
  email: {
    type: String,
    required: true, // validation
    minlength: 1,
    trim: true,
    unique: true
  }
});

module.exports = {User}
