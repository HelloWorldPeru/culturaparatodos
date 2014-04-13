/**
 * EventController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

EventController = {
    data: function(req, res) {
        var event_id = req.param("id");
        var event = Event.findByEvent(event_id).done(function(err, event) {
            res.send(event.getSchool());
        });
    },
    free: function(req, res) {
        var filter = req.param("filter");
        if(filter == undefined || filter == ''){
            Event.find().where({ cost: '0' }).exec(function(err, events) {
                res.send(events);
            });
        } else {
            Event.find().where({ cost: '0' }).where({ tematica: filter }).exec(function(err, events) {
                res.send(events);
            });
        }
    },
    pay: function(req, res) {
        var data = [];
        Event.find().exec(function(err, events) {
            for(i=0; i< events.length; i++){
                if(events[i]['cost'] != '0'){
                    data.push(events[i]);
                }
            }

            res.send(data);
        });
    }

};

module.exports = EventController;
