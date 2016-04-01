/* globals _,RegisterService*/
/**
 * RegisterController
 *
 * @description :: Server-side logic for managing registration
 */

var Promise = require('bluebird');

module.exports = {

    new: function (req, res) {
        return res.view('auth/signup', {
        });
    },

    create: function (req, res) {
        if (_.isEmpty(req.param('email'))) {
            return res.badRequest('An email address is required!');
        }

        RegisterService.validateEmail(req.param('email')).then(function () {
            return RegisterService.encryptPassword(req.param('password'));
        }).then(function (encryptedPassword) {
            var options = {};
            options.email = req.param('email');
            options.encryptedPassword = encryptedPassword;
            options.deleted = false;
            options.admin = false;
            options.banned = false;
            options.fullname = req.param('fullname');
            options.company = {name: req.param('company_name'), biz_locs: [req.param('biz_loc')]};
            options.contact = req.param('contact');
            return options;
        }).then(function (options) {
            return RegisterService.create(options);
        }).then(function (createdUser) {
            return res.send(createdUser);
        }).catch(function (err) {
            return res.badRequest(err);
        });
        // console.log('first name', req.param('full_name'));
        // return res.json({
        //     todo: 'create() is not implemented yet!'
        // });
    }
};

