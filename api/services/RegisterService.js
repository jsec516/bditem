/*globals User*/
var Emailaddresses  = require('machinepack-emailaddresses'),
    Passwords       = require('machinepack-passwords'),
    Promise         = require('bluebird'),
    validateEmail,
    encryptPassword,
    create;

validateEmail = function (email) {
    return new Promise(function (resolve, reject) {
        Emailaddresses.validate({
            string: email
        }).exec({
            // An unexpected error occurred.
            error: function (err) {
                reject(err);
            },
            // The provided string is not an email address.
            invalid: function () {
                reject('Doesn\'t look like an email address to me!');
            },
            // OK.
            success: function () {
                resolve(email);
            }
        });
    });
};

encryptPassword = function (rawPassword) {
    return new Promise(function (resolve, reject) {
        Passwords.encryptPassword({
            password: rawPassword
        }).exec({
            error: function (err) {
                reject(err);
            },

            success: function (result) {
                resolve(result);
            }
        });
    });
};

create = function (options) {
    return new Promise(function (resolve, reject) {
        User.create(options).exec(function (err, createdUser) {
            if (err) {
                reject({type: 'create', errors: err});
            }

            // send createdUser object
            resolve(createdUser);
        });
    });
};

module.exports = {
    validateEmail: validateEmail,
    encryptPassword: encryptPassword,
    create: create
};
