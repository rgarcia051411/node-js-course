const mongoose = require('mongoose');
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password must not contain the word "password"')
            }
        }

    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
});


// const user1 = new User({
//     name: '   Robinson   ',
//     email: 'ROBINSON@yahoo.com     ',
//     password: 'hellothere'
// });


// user1.save().then((user) => {
//     console.log(user)
// }).catch((error) => {
//     console.log('Error', error)
// });




const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const task2 = new Task({
    description: 'Do laundry',
    completed: true
});


task2.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log('Error', error)
})




// const task1 = new Task({
//     description: 'Walk the dogs',
//     completed: true
// });


// task1.save().then((task1) => {
//     console.log(task1);
// }).catch((error) => {
//     console.log('Error:', error)
// })