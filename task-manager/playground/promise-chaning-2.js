require('../src/db/mongoose');
const Task = require('../src/models/task');
const User = require('../src/models/user');
const { count } = require('../src/models/user');


//------------Promise chaining

// Task.findOneAndDelete('5f45490374790097366f6720').then((task) => {
//     console.log(`Task deleted ${task}`);
//     return Task.countDocuments({completed: true});
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e)
// }) //------------END Promise chaining



//------------Asyunc and await
const deleteAndCount = async (id, isCompleted) => {
    const task = await Task.findOneAndDelete(id);
    const count = await Task.countDocuments({completed: true});

    console.log(task)

    return count;
};

deleteAndCount('5f482b6f03017dfa59632d43').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
}); //------------END Asyunc and await