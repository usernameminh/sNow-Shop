const { static } = require('express');
const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');

const route = require('./src/routes/index');

// SET view
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src','resource', 'views'))

// static file

app.use(express.static(path.join(__dirname, 'src', 'public')))

// route init
route(app);


app.listen(PORT, ()=> console.log(`Server listening at http://localhost:${PORT}`))
