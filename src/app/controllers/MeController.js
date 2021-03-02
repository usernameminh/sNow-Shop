const Products = require('../models/Product');
class MeController {

  // [GET] /me/store
  store(req, res, next) {
    Products.find({})
      .then(products => res.render('me/store', {products}))
      .catch(next)
  }
}

module.exports = new MeController;
