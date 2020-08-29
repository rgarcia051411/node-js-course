const express = require('express');
const ObjectId = require('mongoose').Types.ObjectId;
require('./db/mongoose'); //requiring the file from db/mongoose to connect to databse
const User = require('./models/user');
const Task = require('./models/task');





const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()) // express automatically parse json

//Creating resources using POST
app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => { //the parameter in .then((optional))
        res.status(201).send()
    }).catch((e) => {
        res.status(400).send(e)

    });
}); //End CREATE resources for users

//Reading resources users using GET all users plural
app.get('/users', (req, res) => {
    User.find({}).then((users) => { //plural users because finding all users
        res.send(users)
    }).then((e) => {
        res.status(500).send(e)
    });
}); //end Reading resources


//Reading resources users using GET specific one user
app.get('/users/:id', (req, res) => { //:id is the parameter you are serching
    const _id = req.params.id;

    if(!ObjectId.isValid(_id)) {
        return res.status(404).send()
    }

    User.findById(_id).then((user) => {
        if(!user) {
            return res.status(404).send()
        } 

        res.send(user)
    }).catch((e) => {
        res.status(500).send(e)
    });
}); //End Read one resources


app.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save().then((task) => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    });
});


//fetching tasks endpoint multiple task

app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.status(200).send(tasks)
    }).catch((e) => {
        res.status(500).send(e)
    });
}); //End of fetching task endpoint


//Fetching tasks ednpoint singular finding one task

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;

    if(!ObjectId.isValid(_id)) {
        return res.status(404).send()
    }

    Task.findById(_id).then((task) => {
        if(!task) {
            return res.status(404).send();
        }

        res.send(task);
    }).catch((e) => {
        res.status(500).send(e)
    });
}); // End task endpoint








app.listen(port, () => {
    console.log('Server is up on port' + port);
});