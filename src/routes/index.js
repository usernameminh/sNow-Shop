const site = require('./site');
const products = require('./products');
const me = require('./me');

function route(app) {

  app.use('/products', products)
  app.use('/me', me)

  app.use('/', site);
}

module.exports = route;
