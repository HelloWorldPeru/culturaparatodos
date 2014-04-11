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
          type: 'STRING'
      },

      date: {
          type: 'DATE'
      },

      start: {
          type: 'TIME'
      },

      end: {
          type: 'TIME'
      },

      school: {
          type: 'STRING'
      }
    
  }

};
