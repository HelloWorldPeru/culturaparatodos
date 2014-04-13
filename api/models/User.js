/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

      name: {
          type: 'STRING'
      },

      token: {
          type: 'STRING'
      },

      email: {
          type: 'email',
          required: true
      },

      role: {
          type: 'STRING',
          defaultsTo: 'USER'
      },

      photo: {
          type: 'STRING',
          defaultsTo: 'http://www.security-camera-warehouse.com/images/profile.png'
      },

      password: {
          type: 'string',
          minLength: 6,
          required: true,
          columnName: 'encrypted_password'
      },
      influence: {
          type: 'STRING',
          defaultsTo: '0'
      }
    
  },

  beforeCreate: function(values, next) {
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var hasher = require("password-hash");
      var password = hasher.generate(values.password);
      var text = '';
      for( var i=0; i < 5; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

      values.password = password;
      values.token = text;
      next();
  }

};
