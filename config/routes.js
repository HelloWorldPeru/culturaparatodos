/**
 * Routes
 *
 * Sails uses a number of different strategies to route requests.
 * Here they are top-to-bottom, in order of precedence.
 *
 * For more information on routes, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.routes = {

  '/': {
      view: 'home/index'
  },

  '/login': {
      controller: 'home',
      action: 'login'
  },

  '/signup': {
      controller: 'home',
      action: 'signup'
  },

  '/event/detail/:id?': {
      controller: 'event',
      action: 'data'
  }
    
};

