const orm = require('../Config/orm');


// code that will call orm functions using burger specific input//

const burgerModel = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        })
    },
    insert: function (values, cb) {
        console.log('controller value is', values);
        orm.insertOne(values.burger_name, function (res) {
            cb(res);
        })
    },
    update: function (targBurg, cb) {
        orm.updateOne(targBurg, function(res) {
            cb(res);
        })
    }
}

module.exports = burgerModel;