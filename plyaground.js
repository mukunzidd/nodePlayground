const excuses = [
  {
    id: 3,
    title: "it's difficult",
    type: 'lazy'
  },
  {
    id: 1,
    title: "I can't do it",
    type: 'typical'
  },
  {
    id: 2,
    title: "I'm not a genius",
    type: 'generic'
  }
];

// 1. Print all excuses.
function getAll() {
  console.log(excuses);
}
// getAll();
// 2. Print one excuse.
// write a function that takes the excuse id as an argument and return the excuse with that excuse. id: 3
function getExcuse(id) {
  const res = excuses.find(function(element) {
    return element.id == id;
  });
  console.log(res);
}
// getExcuse(3);

// 3. Add one more excuse objects to the array. return the new array
function addExcuse(newExcuse) {
  excuses.push(newExcuse);
  console.log(excuses);
}

// addExcuse({ id: 4, title: 'other ting', type: 'lazy' });

// 4. Update the excuse with an id of 3. Set it's title to "I am dumb" the turn the new array
function updateExcuse(id, payload) {
  // find object with id 3
  const excuse = excuses.find(function(element) {
    return element.id == id;
  });

  // update the object with payload
  excuse.title = payload.title;
  console.log(excuse);
}

// updateExcuse(3, { title: 'I am dumb' });

// 5. Delete one excuse from the array id: 1. Return the new array with the excuse deleted.
function deleteExcuse(id) {
  //   console.log(excuses);
  const filtered = excuses.filter(function(excuse) {
    return excuse.id !== id;
  });
  console.log(filtered);
}
deleteExcuse(1);
