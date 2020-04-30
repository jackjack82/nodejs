// from course, CRUD methods

const mongodb  = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'mongo_course'


// http://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html
MongoClient.connect(connectionUrl, { userNewUrlparser: true }, (error,client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html
    // collection('xx').insertMany([{xxx},{xxx}])
    db.collection('users').insertOne({
         name: 'Giacomo',
         age: 27,
    }, (error, result) => {
        if(error){
            return console.log('Unable to insert user')
        }

        return console.log(result.ops)
    })
})
