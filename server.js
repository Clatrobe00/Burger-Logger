//express server

const express = require('express');
const app = express();




//parsing

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Port

const PORT = 3000

app.listen((process.env.PORT || PORT), () => console.log(`Server is running on ${PORT}`));