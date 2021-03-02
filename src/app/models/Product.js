const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Product = new Schema({
  name: {type: String, maxLenght: 255 },
  price: {type: Number},
  priceSale: {type: Number},
  image: {type: String, maxLenght: 255},
  flagOwn: {type: String, default: null},
  flagSale: {type: Number},
  slug: { type: String, slug: "name", unique: true },
}, {timestamps: true})

module.exports = mongoose.model('product', Product);
