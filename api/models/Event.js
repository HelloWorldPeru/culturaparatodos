/**
 * Event
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

      name: {
          type: 'STRING',
          required: true
      },

      date: {
          type: 'STRING',
          required: true
      },

      start: {
          type: 'STRING',
          required: true
      },

      end: {
          type: 'STRING',
          required: true
      },

      school:{
          type: 'STRING'
      },

      latitude: {
          type: 'STRING',
          required: true
      },

      longitude: {
          type: 'STRING',
          required: true
      },

      point: function() {
          return this.latitude + ',' + this.longitude;
      },

      getSchool: function() {
          data = 'a';
          hola = School.findOne(this.school).done(function(err, school) {
              data = school;
              console.log(data);
              return data
          });
          console.log(data);
          console.log(hola);
          return data;
      },

      event: function() {
          return this.name + ' ' + this.date;
      },

      toJSON: function() {
          var obj = this.toObject();
          delete obj.password;
          return obj;
      }
    
  }

};
