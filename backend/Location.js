const NameGenerator = require('./NameGenerator.js');

//cities contain suburbs which contain streets which contain houses which contain people
//suburbs are adjacent to other suburbs

const indexToCoord = (i, rowLength) => {
  //converts a 1 dimensional array indec to a 2 dimensional grid co-ordinate
  const row = Math.floor(i / rowLength);
  const col = i % rowLength;
  return [row, col];
}

const coordToIndex = (coord, rowLength) => {
  //converts a 2 dimensional grid co-ordinate to a 1 dimensional array index
  const row = coord[0];
  const col = coord[1];
  return row * rowLength + col;
}

const isValidCoord = (coord, totalCount, rowLength) => {
  const [row, col] = coord;
  if (row < 0 || col < 0) {
    return false;
  }
  if (col >= rowLength) {
    return false;
  }

  if (coordToIndex(coord, rowLength) >= totalCount){
    return false;
  }
  return true;
}

const createCity = (numSuburbs) => {
  const cityName = "Melbourne";
  const suburbs = [];
  for (let i=0; i < numSuburbs; i++) {
    suburbs.push(createSuburb())
  }

  const rowLength = Math.floor(Math.sqrt(numSuburbs));
  for (let j=0; j < numSuburbs; j++) {
    const [row, col] = indexToCoord(j, rowLength);
    console.log({row, col})

    const adjacentCoords = [
      [row -1, col],
      [row + 1, col],
      [row, col -1],
      [row, col +1],
    ]

    adjacentCoords.forEach((adjacentCoord) => {
      if (isValidCoord(adjacentCoord, numSuburbs, rowLength)) {
        const adjacentIndex = coordToIndex(adjacentCoord, rowLength);
        const adjacentLocation = suburbs[adjacentIndex];
        suburbs[j].adjacentLocations.push(adjacentLocation);
      }
    })
  }
  return {
    name: cityName,
    subLocations: suburbs,
    adjacentLocations: [],
  }
}

const createSuburb = () => {
  return {
    name: NameGenerator.generateSuburbName(),
    adjacentLocations: [],
  }

}

exports.isValidCoord = isValidCoord;
exports.indexToCoord = indexToCoord;

exports.coordToIndex = coordToIndex;

exports.createCity = createCity;
