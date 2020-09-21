var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    idUser: {
        type: 'String',
        required: true
      },
      nama: {
        type: 'String',
        required: true
      },
      email: {
        type: 'String'
      },
      username: {
        type: 'String',
        required: true
      },
      password: {
          type : 'String',
          required: true
      },
      level: {
        type : 'String',
        required: true
    }
});

module.exports = mongoose.model('user', user);