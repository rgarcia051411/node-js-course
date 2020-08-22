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

        //-------creating/inserting document to db-----////

        // db.collection('users').insertOne(
        //     {
        //         name: 'Wilson',
        //         age: 28,
        //     },
        //     (error, result) => {
        //         if (error) {
        //             return console.log('Unable to insert user');
        //         }

        //         console.log(result.ops)
        //     });

        // db.collection('users').insertMany([
        //     {
        //         name: 'Kristine',
        //         age: 32
        //     }, {
        //         name:'Thor',
        //         age:7
        //     }, {
        //         name:'Lexy',
        //         age:2
        //     }
        // ], (error, result) => {
        //     if(error) {
        //         return console.log('Unable to insert user')
        //     }

        //     console.log(result.ops)
        // });

        // Challenge: Insert 3 tasks into a new task collection
        // db.collection('tasks').insertMany(
        //     [
        //         {
        //             description: 'Do laundry',
        //             completed: true,
        //         },
        //         {
        //             description: 'Walk the dogs',
        //             completed: false,
        //         },
        //         {
        //             description: 'Clean the house',
        //             completed: false,
        //         },
        //     ],
        //     (error, result) => {
        //         if (error) {
        //             return console.log('Unable to insert task');
        //         }

        //         console.log(result.ops);
        //     }
        // );

        //----------read/find document in db-----////

        // db.collection('tasks').findOne(
        //     { _id: new ObjectID('5f3af3ac6426cc9ba4231de0') },
        //     (error, task) => {
        //         if (error) {
        //             return console.log('Unable to fetch data');
        //         }

        //         console.log(task)
        //     }
        // );

        // db.collection('tasks')
        //     .find({ completed: false })
        //     .toArray((error, task) => {
        //         if (error) {
        //             return console.log('Unable to fetch data');
        //         }

        //         console.log(task);
        //     });

        //------finding many does not require a callback, but a method such .toArray requires callback---//
        // db.collection('users').find({ age: 32 }).toArray((errot, users) => {
        //     console.log(users)
        // })


        //-----------Updating database----------//

         // db.collection('users').updateOne({ 
        //     _id: new ObjectID('5f3a916b9a1a6d70db59c27b') 
        // }, {
        //     $set: {
        //         name: 'Sterling Archer',
        //         age: 40
        //     }
        // }).then((result) => {
        //     console.log(result);
        // }).catch((e)=> {
        //     console.log(e)
        // });


        // db.collection('tasks').updateMany({
        //     completed: false
        // }, {
        //     $set: {
        //         completed: true
        //     }
        // }).then((result) => {
        //     console.log(result)
        // }).catch((e) => {
        //     console.log(e)
        // });



        //--------Deleting data in the database-----//
        // db.collection('users').deleteOne({
        //     _id: new ObjectID('5f3bd06d238435aac6bf668c')
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // });


        // db.collection('tasks').deleteMany({
        //      completed: true
        //     }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        
    });
