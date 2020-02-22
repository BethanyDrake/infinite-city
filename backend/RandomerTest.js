const Randomer = require('./Randomer.js');


const arr = ['only one'];

if (Randomer.randomElement(arr) !== arr[0]) {
  console.log("fail for one element!")
}


const arr2 = ['one', 'two'];


for (i = 0; i < 10; i++) {
  if (Randomer.randomElement(arr2) === undefined) {
    console.log("fail for two elements!")
  }
}
