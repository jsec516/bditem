/**
 * LoginController
 *
 * @description :: Server-side logic for managing login
 */

module.exports = {

    get: function (req, res) {
        return res.view('auth/signin', {
        });
    },

    post: function (req, res) {
        return res.json({
            todo: 'create() is not implemented yet!'
        });
    }
};

