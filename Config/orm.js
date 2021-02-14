const db = require('./connection');
const tableName = burger;


const orm = {
    selectAll () {
        console.log('select all');
    },

    insertOne() {
        console.log('insert one');
    },

    updateOne() {
        console.log('update one');
    }
}

module.exports = orm;