const db = require('./connection');
const tableName = burger;


const orm = {
    selectAll: function () {
        let queryString = "SELECT * FROM burger"
        db.query(queryString, function (err, result){
            if (err) throw err;
            console.log(result);
        })
    },

    insertOne: function (values) {
        let queryString = "INSERT INTO burger (burger_name, devoured) VALUES (?)";
        db.query(queryString, [table, values], function (err, result){
            if (err) throw err;
            console.log(result);
        })
    },

    updateOne(targBurg) {
        let queryString = "UPDATE burger SET devoured = 1 WHERE burger_name = ??";
        db.query(queryString, targBurg, function (err, result){
            if (err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm;