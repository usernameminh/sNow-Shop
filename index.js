const { static } = require('express');
const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');

const db = require('./src/config/db/index');
const route = require('./src/routes/index');

// SET view
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src','resource', 'views'))

// static file
app.use(express.static(path.join(__dirname, 'src', 'public')))

// body-parser
app.use(express.urlencoded(
  {
    extended: true
  }
))
app.use(express.json())


// override using a query value
var methodOverride = require('method-override')
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// conect db
db.connect();

// route init
route(app);


app.listen(PORT, ()=> console.log(`Server listening at http://localhost:${PORT}`))
