const burger = require('../models')
const express = require("express");

const router = express.Router();


// create router for this app, export at end of file.

router.get("/", function(req, res) {
    burger.all(function(data) {
        console.log('getting', data)
    });
});

router.post("/", function (req, res){
    burger.insert("Whopper", function(result) {
        console.log('posting', result);
    });
});

router.put("/", function (req, res){
    burger.update("Big Mac", function(result){
        console.log('updating', result);
    });
});




module.exports = {router}