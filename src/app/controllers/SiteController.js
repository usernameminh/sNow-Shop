const Product = require('../models/Product');
class SiteController {
  // [GET] /
  index(req, res, next) {
    Product.find({})
      .then(products => res.render('home', {products}))
      .catch(next)
  }
  // [GET] /search
  search(req, res) {
    res.render('search')
  }

  // [GET] /singIn
  signIn(req, res) {
    res.render('sign-in')
  }

  // [GET] /signUp
  signUp(req, res) {
    res.render('sign-up')
  }

  // [GET] /contact
  contact(req, res) {
    res.render('contact')
  }
}

module.exports = new SiteController;
