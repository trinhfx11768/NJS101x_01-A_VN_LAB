const path = require('path');

const express = require('express');
// const handlebars = require('express-handlebars');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');

const app = express();

//templates engine

//pug
// app.set('view engine', 'pug');
// app.set('views', 'views');

//ejs
app.set('view engine', 'ejs');
app.set('views', 'views');


//hbs
// app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
// app.set('view engine', '.hbs');
// app.set('views', path.join(__dirname, 'views'));

//Parsed body cho form data, XMLHttp, Json, ...
app.use(express.urlencoded({ extended: false }));

//static là path for folder công khai, cố định cố định; __dirname là thư mục gốc của project
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);