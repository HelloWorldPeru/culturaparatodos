/**
 * Work
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

      user: {
          type: 'STRING',
          required: true
      },

      name: {
          type: 'STRING',
          required: true
      },

      descrip: {
          type: 'STRING',
          required: true
      },

      video: {
          type: 'STRING',
          required: true
      },

      cheers: {
          type: 'STRING',
          defaultsTo: '0'
      }

  }

};
