const express = require('express');
const router = new express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Task = require('../models/task');

//-----------Task API----------//

//----Creating POST resources for task
router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
}); //End Post resources


//fetching tasks endpoint multiple task

router.get('/tasks', async (req, res) => {

    try {
        const tasks = await Task.find({})
        res.status(201).send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
}); //End of fetching task endpoint


//Fetching tasks ednpoint singular finding one task

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    if (!ObjectId.isValid(_id)) {
        return res.status(404).send()
    }

    try {

        const task = await Task.findById(_id);
        if (!task) {
            res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
}); // End task endpoint


//Update or Patch endpoint for TASK
router.patch('/tasks/:id', async (req, res) => {

    const allowedUpdates = ['completed', 'description'];
    const updates = Object.keys(req.body);
    const isValidUpdates = updates.every((update) => {
        return allowedUpdates.includes(update);
    });

    const _id = req.params.id;

    if (!ObjectId.isValid(_id)) {
        res.status(404).send();
    };


    if (!isValidUpdates) {
        res.status(400).send({
            error: 'Invalid update'
        })
    }

    try {
     
        const task = await Task.findByIdAndUpdate(_id);

        updates.forEach((update) => task[update] = req.body[update]);

        task.save();

        if (!task) {
            res.status(404).send()
        }

        res.send(task)

    } catch (e) {
        res.status(400).send(e)
    }
}); // End patch API


//------Delete Endpoint for TASK

router.delete('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    if (!ObjectId.isValid(_id)) {
        res.status(404).send()
    }

    try {
        const task = await Task.findByIdAndDelete(_id);

        if (!task) {
            res.status(404).send()
        }

        res.send(task)

    } catch (e) {
        res.status(500).send(e)
    };

}); //--End Delete endpoint



module.exports = router;