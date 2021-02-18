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

router.post("/", function (req, res){
    burger.insert(req.body.name, function(result) {
        console.log('posting', result);
    });
});

router.put("/:id", function (req, res){
    burger.update(req.params, function(result){
        console.log(req.params);
        console.log('updating', result);
    });
});




module.exports = router;