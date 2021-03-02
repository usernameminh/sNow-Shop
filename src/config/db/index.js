const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/sNow_shop_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log('Connect susscessfully!!');
  } catch (error) {
    console.log('Connect fail!');
  }
}

module.exports = { connect }