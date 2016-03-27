/**
 * RegisterController
 *
 * @description :: Server-side logic for managing registration
 */

module.exports = {

    get: function (req, res) {
        return res.view('auth/signup', {
        });
    },

    post: function (req, res) {
        return res.json({
            todo: 'create() is not implemented yet!'
        });
    }
};

