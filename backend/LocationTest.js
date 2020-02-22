const Location = require('./Location.js');



const testIndexToCoord = (i, rowLength, expected) => {
  const output = Location.indexToCoord(i, rowLength);
  if (output + '' != expected + '') {
    console.log('fail!', {
      i, rowLength, expected, actual: output
    })
  }
}


testIndexToCoord(0, 1, [0, 0]);
testIndexToCoord(1, 2, [0, 1]);
testIndexToCoord(1, 1, [1, 0]);
testIndexToCoord(6, 3, [2, 0]);
testIndexToCoord(7, 3, [2, 1]);
testIndexToCoord(8, 3, [2, 2]);



const testCordToIndex = (i, rowLength) => {

  const coord = Location.indexToCoord(i, rowLength);
  const expected = i;
  const output = Location.coordToIndex(coord, rowLength);

  if (output + '' != expected + '') {
    console.log('fail!', {
      i, rowLength, expected, actual: output
    })
  }
}

testCordToIndex(0, 1, [0, 0]);
testCordToIndex(1, 2, [0, 1]);
testCordToIndex(1, 1, [1, 0]);
testCordToIndex(6, 3, [2, 0]);
testCordToIndex(7, 3, [2, 1]);
testCordToIndex(8, 3, [2, 2]);

const reallyTestCordToIndex = (coord, rowLength, expected) => {
  const output = Location.coordToIndex(coord, rowLength);
  if (output + '' != expected + '') {
    console.log('fail!', {
      coord, rowLength, expected, actual: output
    })
  }
}

reallyTestCordToIndex([0,0], 3, 0);
reallyTestCordToIndex([1,1], 3, 4);
reallyTestCordToIndex([2,2], 3, 8);

const testIsValidCoord = (coord, totalCount, rowLength, expected) => {
  const output = Location.isValidCoord(coord, totalCount, rowLength);
  if (output + '' != expected + '') {
    console.log('fail!', {
      coord, totalCount, rowLength, actual: output
    })
  }
}

//negative row or col
testIsValidCoord([-1, 0], 1, 1, false)
testIsValidCoord([0, -1], 1, 1, false)

//col higher than possible
testIsValidCoord([0, 3], 9, 3, false)
testIsValidCoord([0, 7], 9, 3, false)

//higher index than possible
testIsValidCoord([7, 2], 9, 3, false)
testIsValidCoord([3, 0], 9, 3, false)


testIsValidCoord([0, 0], 1, 1, true)
testIsValidCoord([2, 2], 9, 3, true)

const city = Location.createCity(5);
console.log(city);

console.log(city.subLocations[0]);
