/**
 * LoginController
 *
 * @description :: Server-side logic for managing login
 */

module.exports = {

  new: function (req, res) {
    return res.view('auth/signin', {
    });
  },

  create: function (req, res) {
    return res.json({
      todo: 'create() is not implemented yet!'
    });
  }
};
