const mongodb = require('mongodb');
const MongoCliet = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoCliet.connect(
    connectionURL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
        if (error) {
            return console.log('Unable to connect to database!');
        }

        const db = client.db(databaseName);

        // db.collection('users').insertOne(
        //     {
        //         name: 'Robinson',
        //         age: 32,
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
        db.collection('tasks').insertMany(
            [
                {
                    description: 'Do laundry',
                    completed: true,
                },
                {
                    description: 'Walk the dogs',
                    completed: false,
                },
                {
                    description: 'Clean the house',
                    completed: false,
                },
            ],
            (error, result) => {
                if (error) {
                    return console.log('Unable to insert task');
                }

                console.log(result.ops);
            }
        );
    }
);
