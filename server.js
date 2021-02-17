//express server

const express = require('express');
const app = express();
const exphbs = require("express-handlebars");
const routes  = require('./controllers/burger_controllers');

// Static file serving
app.use(express.static("public"));

//parsing

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Port

// Handlebars Engine

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// port
const PORT = 3000

//route
app.use(routes);

app.listen((process.env.PORT || PORT), () => console.log(`Server is running on ${PORT}`));