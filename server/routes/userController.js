var bluebird = require('bluebird');
var MongoClient = require('mongodb').MongoClient;
var MongoCollection  = require('mongodb').Collection;

bluebird.promisifyAll(MongoCollection.prototype);
bluebird.promisifyAll(MongoClient);

const URL ="mongodb://192.168.99.100:27017/eShop";

userController = {
    getUsers: (err, callback) => {
        let dbConnection;
        MongoClient.connectAsync(URL)
            .then(function(connection) {
                dbConnection = connection;
                return connection.db("eShop").collection("users").findAsync({});
            })
            .then(function (cursor) {
                cursor.toArray((err, items) => {
                    callback(items);
                });
            })
            .finally(() => {dbConnection.close()})
            .catch((err)=>{
                console.log(err);
                err(500);
            });
    },

    addUser: (err, callback, record) => {
        let dbConnection;
        MongoClient.connectAsync(URL)
            .then(function(connection) {
                dbConnection = connection;
                return connection.db("eShop").collection("users").insertOne(record);
            })
            .then(function (doc) {
                callback(doc);
            })
            .finally(() => {dbConnection.close()})
            .catch((err)=>{
                console.log(err);
                err(500);
            });
    }

};

module.exports = userController;
