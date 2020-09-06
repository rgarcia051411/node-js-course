const express = require('express');
require('./db/mongoose'); //requiring the file from db/mongoose to connect to databse
const User = require('./models/user');
const Task = require('./models/task');

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()) // express automatically parse json
app.use(userRouter); //loading the user.js
app.use(taskRouter); //loading the  task.js


const router = new express.Router();



app.listen(port, () => {
    console.log('Server is up on port' + port);
});


const myFuntion = async () => {
    
}