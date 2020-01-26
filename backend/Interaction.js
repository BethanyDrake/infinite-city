const interact = (relationship) => {

  //roll for socialness
  const situationFriendliness = randomNumber(15 - relationship.traits.friendshipCompatibilty); //say 5

  const p1Friendliness = randomNumber(relationship.people[0].traits.socialness); //say 3
  const p2Friendliness = randomNumber(relationship.people[1].traits.socialness); //say 7

  if (p1Friendliness > situationFriendliness || p2Friendliness > situationFriendliness) {
    relationship.status.friendship += 1;
  }

}

const createRelationship = (p1, p2) => {
  return {
    people: [p1, p2],
    traits: {
      friendshipCompatibilty: randomNumber(10),
      romanticCompatibility: randomNumber(10),
    },
    status: {
      friendship: 0,
      romance: 0,
      animosity: 0,
      children: [],
    }
  }

}

const randomNumber = (max) => {
    return Math.ceil(Math.random() * Math.floor(max));
}

exports.interact = interact;
exports.createRelationship = createRelationship;
