const express = require('express');
const router = new express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const User = require('../models/user')

//Creating resources using POST
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
}); //End CREATE resources for users

//Reading resources users using GET all users plural
router.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send(e);
    };
}); //end Reading resources


//Reading resources users using GET specific one user
router.get('/users/:id', async (req, res) => { //:id is the parameter you are serching
    const _id = req.params.id;

    if (!ObjectId.isValid(_id)) {
        return res.status(404).send()
    }

    try {

        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
}); //End Read one resources


router.patch('/users/:id', async (req, res) => {
    const _id = req.params.id

    const updates = Object.keys(req.body) //Object.keys will convert the object from req.body into an array
    const allowedUpdates = ['name', 'email', 'password', 'age']; //storing individual properties that I would like someone to be able to change in an array.
    const isValidOperation = updates.every((update) => { //every is an array method that takes a call back function. syntax is, the evey was used on updates (update.every()). the callback funnction gets called in every items in array updates.
        return allowedUpdates.includes(update); //.include is a method that will go through the whole list of array and check if the given parameter is present in the original array. 
    });

    if (!ObjectID.isValid(_id)) {
        return res.status(404).send()
    };

    if (!isValidOperation) {
        return res.status(400).send({
            error: 'Invalid updates'
        })
    };



    try {
        const user = await User.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: true
        });

        if (!user) {
            return res.status(404).send()
        };

        res.send(user)

    } catch (e) {
        res.status(400).send(e)
    }
}); //end patch endpoint


//Delete HTTP endpoint
router.delete('/users/:id', async (req, res) => {
    const _id = req.params.id;

    if (!ObjectID.isValid(_id)) {
        res.status(404).send();
    }

    try {
        const user = await User.findByIdAndDelete(_id);

        if (!user) {
            res.status(404).send()
        };

        res.send(user)

    } catch (e) {
        res.status(400).send();
    };

}); //---End Delete endpoint


//-----------End User API-------//

module.exports = router;