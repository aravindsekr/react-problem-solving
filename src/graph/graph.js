var data = [
  {
    userId: 1,
    name: "A",
    job: "Software_Engineer",
    connections: [2, 6, 7, 9, 10]
  },
  {
    userId: 2,
    name: "B",
    job: "Software_Engineer",
    connections: [4, 1]
  },
  {
    userId: 3,
    name: "C",
    job: "Doctor",
    connections: [4, 6]
  },
  {
    userId: 4,
    name: "D",
    job: "Pharmacy",
    connections: [1, 2, 3]
  },
  {
    userId: 5,
    name: "E",
    job: "Director",
    connections: [6, 7, 8]
  },
  {
    userId: 6,
    name: "F",
    job: "Director",
    connections: [1, 9]
  },
  {
    userId: 7,
    name: "G",
    job: "Director",
    connections: [6, 10]
  },
  {
    userId: 8,
    name: "H",
    job: "IT",
    connections: [9, 10]
  },
  {
    userId: 9,
    name: "H",
    job: "IT",
    connections: [5, 6, 7]
  },
  {
    userId: 10,
    name: "I",
    job: "IT",
    connections: [2, 5, 6, 7]
  }
];

const getUser = (id) => data.filter((d) => d.userId === id)[0];

const traverse = (degreeOfSeparation = 1) => {
  let queue = [1];
  const jobs = {};

  // process the first item
  let seen = new Set(queue);

  for (let degree = 0; degree < degreeOfSeparation; degree++) {
    const nextSetOfUsersQueue = [];

    while (queue.length) {
      let currentUser = getUser(queue.shift());

      for (let j = 0; j < currentUser.connections.length; j++) {
        let connection = currentUser.connections[j];

        if (!seen.has(connection)) {
          nextSetOfUsersQueue.push(connection);
          seen.add(connection);
        }
      }

      jobs[currentUser.job] = jobs[currentUser.job]
        ? jobs[currentUser.job] + 1
        : 1;
    }

    // add queue into parent queue for procesing next degrees
    queue = nextSetOfUsersQueue;
  }

  return JSON.stringify(jobs);
};

export default traverse;
