//regular function

// const square = function (x) {
//   return x * x;
// };

// Arrow function long form. have multiple statements

// const square = (x) => {
//   return x * x;
// };

// If the function only have single statement  no need for return and curly braces
// const square = (x) => x * x;

// console.log(square(2));

//Setting up method inside the object so you can use binding
const event = {
  name: 'Birthday party',
  gustList: ['Robinson', 'Jen', 'Mike'],
  printGuestList() {
    console.log('Guest list for ' + this.name);

    this.gustList.forEach((guest) => {
      console.log(`${guest} is attending ${this.name}`);
    });
  }
};

event.printGuestList();
