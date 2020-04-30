// from course, CRUD methods

// const mongodb  = require('mongodb')
// const MongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'mongo_course'

// const ObjectId = mongodb.ObjectID

// we create the ID ourselve
const {MongoClient, ObjectID} = require('mongodb')

// https://docs.mongodb.com/manual/reference/method/ObjectId/ or
// http://mongodb.github.io/node-mongodb-native/3.6/api/ObjectID.html
const id = new ObjectID()
console.log(id)

// http://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html
MongoClient.connect(connectionUrl, { userNewUrlparser: true }, (error,client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html
    // collection('xx').insertMany([{xxx},{xxx}])
    db.collection('users').insertOne({
        _id: id , 
        name: 'Malcom',
         age: 37,
    }, (error, result) => {
        if(error){
            return console.log('Unable to insert user')
        }

        return console.log(result.ops)
    })
})
