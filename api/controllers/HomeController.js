/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `HomeController.index()`
   */
  index: function (req, res) {
    return res.view({
      todo: 'index() is not implemented yet!'
    });
  },

  subscribe: function (req, res) {
    sails.sockets.join(req.socket, "funSockets");
    sails.sockets.broadcast("funSockets", "hello", "Hello to all my fun sockets!");
    // User.find(function findUsers(err, users) {
    //   User.subscribe(req.socket);
    //   User.subscribe(req.socket, users);
    // });
    return res.ok("Hello to all my fun sockets!");
  }
};

