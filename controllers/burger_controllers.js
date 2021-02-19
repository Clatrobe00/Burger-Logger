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

router.post("/:burger_name", function (req, res){
    burger.insert(req.params, function(result) {
        console.log(req.params);
        console.log('posting', result);
    });
    res.redirect('/');
});

router.put("/:id", function (req, res){
    burger.update(req.params, function(result){
        console.log(req.params);
        console.log('updating', result);
    });
    res.redirect('/');
});




module.exports = router;