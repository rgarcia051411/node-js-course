//CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb'); //Destructured

/*
//------This code is similar as the obove code---//
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectID
*/

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
        if (error) {
            return console.log('Unable to connect to database!');
        }

        const db = client.db(databaseName);

        db.collection('tasks').deleteOne({
            description: "Do laundry"
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        });


        // db.collection('tasks').deleteMany({
        //      completed: true
        //     }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        

    });
