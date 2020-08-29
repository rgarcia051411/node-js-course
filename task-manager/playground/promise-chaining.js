require('../src/db/mongoose')
const User = require('../src/models/user');
const { updateOne } = require('../src/models/user');


//-------------Promise chaning0-------------//

// User.findByIdAndUpdate('5f45490374790097366f6720', {age: 1 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// }); //------------End promise chaining


//----------Using async and await--------------//

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age});

    return count
    
}; //----------End Using async and await


updateAgeAndCount('5f45490374790097366f6720', 2).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});





