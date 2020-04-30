// from course, CRUD methods

const mongodb  = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'mongo_course'


MongoClient.connect(connectionUrl, { userNewUrlparser: true }, (error,client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('users').insertOne({
         name: 'Giacomo',
         age: 27,
    })
})
