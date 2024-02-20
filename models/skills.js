// THIS IS FOR SIMPLICITY PURPOSES TODAY, because we don't 
// have a DATABASE, we are just using an in memory array, 
// so we have some data to work with!

// normally we will have an object with the methods that 
// talk to the database here!

const skills = [
	{id: 125223, skill: 'Feed Dogs', done: true},
	{id: 127904, skill: 'Learn Express', done: false},
	{id: 139608, skill: 'Buy Milk', done: false}
  ];
  
  module.exports = {
	getAll, // shorthand for getAll: getAll
	getOne, // shorthand for getOne: GetOne
	create,
	deleteOne
	// getOne: getOne
  };

  function deleteOne(id) {
	// All properties attached to req.params are strings!
	id = parseInt(id);
	// Find the index based on the id of the skill object
	const idx = skills.findIndex(skill => skill.id === id);
	skills.splice(idx, 1);
  }
 
  function create(skill) {
	// Add the id
	skill.id = Date.now() % 1000000;
	// New skills wouldn't be done :)
	skill.done = false;
	skills.push(skill);
  }

  function getAll() {
	return skills;
  }

  function getOne(id) {
	// URL params are strings - convert to a number
	id = parseInt(id);
	// The Array.prototype.find iterator method is
	// ideal for finding objects within an array
	return skills.find(skill => skill.id === id);
  }