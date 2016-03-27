/**
 * RegisterController
 *
 * @description :: Server-side logic for managing registration
 */

module.exports = {

    new: function (req, res) {
        return res.view('auth/signup', {
        });
    },

    create: function (req, res) {
        return res.json({
            todo: 'create() is not implemented yet!'
        });
    }
};

