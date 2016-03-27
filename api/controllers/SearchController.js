/**
 * SearchController
 *
 * @description :: Server-side logic for Search
 */

module.exports = {

    index: function (req, res) {
        console.log(req.param('term'));
        return res.view('buy/index', {
        });
    }
};

