const Product = require('../models/Product');

class ProductController {

  // [GET] /product/:slug
  show(req, res, next) {
    Product.findOne({slug: req.params.slug})
      .then( product => res.render('products/show', {product}))
      .catch(next)
  }

  // [GET] /products/create
  create(req, res) {
    res.render('products/create')
  }

  // [DELETE] /products/:id
  delete(req, res, next) {
    Product.deleteOne({_id: req.params.id})
      .then(() => res.redirect('/'))
      .catch(next)
    
  }


  // [POST] /products/store
  store(req, res, next) {
    const product = new Product(req.body)
    // product.save()
    //   .then(res.redirect('/'))
    //   .catch(next)
    Product.create(product)
      .then(res.redirect('/me/store'))
      .catch(next)
  }

  // [GET] /products/:id/edit
  edit(req, res, next) {
    Product.findById(req.params.id)
      .then(product => res.render('products/edit', {product}))
      .catch(next)
  }

  // [PUT] /products/:id/
  update(req, res, next) {
    Product.updateOne({_id: req.params.id}, req.body)
      .then(() => res.redirect('/me/store'))
      .catch(next)
  }

}

module.exports = new ProductController;
