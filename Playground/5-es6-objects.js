 const name = 'Andrew'
 const userAge = 27

 const user = {
        name,  //it is in shorthand syntax. old syntax(name:name)
        age: userAge,
        location: 'San Francisco'
 };

 console.log(user);



//-------Object destructuring----------

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}


// const {label:productLabel, stock, rating = 5} = product;

// console.log(productLabel);
// console.log(stock)
// console.log(rating)




//--------------------destructuring for a function---------------//

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)