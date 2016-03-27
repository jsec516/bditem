/**
 * BuyOfferController
 *
 * @description :: Server-side logic for managing buying leads
 */

module.exports = {

    index: function (req, res) {
        return res.view('buy/index', {
        });
    },

    new: function (req, res) {
        return res.view('buy/new', {
        });
    },

    create: function (req, res) {
        return res.json({
            todo: 'create() is not implemented yet!'
        });
    }
};

