const orm = require('../Config/orm');


// code that will call orm functions using burger specific input//

const burgerModel = {
    all: function(cb) {
        orm.selectAll(function(res) {
            let burgerNames = res.map(obj => obj.burger_name);
            cb(res);
        })
    },
    insert: function (values, cb) {
        orm.insertOne(values, function (res) {
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