/**
 * School
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

        address: {
            type: 'STRING'
        },

        district: {
            type: 'STRING'
        },

        latitude: {
            type: 'STRING',
            required: true
        },
        photo: {
            type: 'STRING'
        },

        longitude: {
            type: 'STRING',
            required: true
        },
        type: {
            type: 'STRING',
            required: true
        },


        point: function() {
            return this.latitude + ',' + this.longitude;
        },

        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    }

};
