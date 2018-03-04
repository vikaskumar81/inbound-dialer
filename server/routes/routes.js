'use strict';

module.exports = function(app) {
    var User = require('../controller/user.class');
  
    // todoList Routes
    app.route('/user')
      .get(User.List)
      .post(User.AddNew);
  
    app.route('/user/:Id')
      .get(User.List)
      .put(User.Update)
      .delete(User.Delete);
  };