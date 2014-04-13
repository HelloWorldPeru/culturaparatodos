/**
 * DonationController
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

HomeController = {
    getdonation: function (req, res) {
        var event = req.param("id");
        var amount = 0;
        var total = 0;

        Event.findOne(event).done(function(err, data) {
            total = parseFloat(data['cost']);
            if(total > 0){
                Donation.findByEvent(event).done(function(err, donations){
                    for (var i=0; i<donations.length; i++)
                    {
                        amount += parseFloat(donations[i]['amount']);
                    }
                    res.send({
                        'amount':amount,
                        'percentaje': (amount * 100) /total
                    });
                });
            } else {
                res.send({
                    'amount':"0",
                    'percentaje': "100"
                });
            }
        });
    }
};

module.exports = HomeController;
