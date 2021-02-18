const express = require("express");



const router = express.Router();

const burger = require('../models/burger');
// create router for this app, export at end of file.

router.get("/", function(req, res) {
    burger.all(function(burgers) {
        //console.log('getting yo', burgers);
        const hbsObj = {
            burgers: burgers
        }
        res.render('index', hbsObj);
    });
});

router.post("/api", function (req, res){
    console.log(req.body.name);
    burger.insert(req.body.name, function(result) {
        console.log('posting', result);
    });
});

router.put("/eat", function (req, res){
    burger.update("Big Mac", function(result){
        console.log('updating', result);
    });
});




module.exports = router;