const db = require('./connection');


const orm = {
    selectAll: function (cb) {
        let queryString = "SELECT * FROM burger"
        db.query(queryString, function (err, result){
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: function (values) {
        console.log(typeof(values));
        let queryString = "INSERT INTO burger (burger_name) VALUES (?)";
        db.query(queryString, values, function (err, result){
            if (err) throw err;
            console.log(result);
        })
    },

    updateOne(targBurg) {
        console.log(targBurg);
        let queryString = "UPDATE burger SET devoured = TRUE WHERE id = ?";
        db.query(queryString, targBurg.id, function (err, result){
            if (err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm;