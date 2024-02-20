// By Convention the model is capitalized!
const skillModel = require('../models/skills')

module.exports = {
	index, // shorthand for index: index
	show,
	new: newSkill,
	create,
	delete: deleteSkill
}

function deleteSkill(req, res) {
	SkillModel.deleteOne(req.params.id);
	res.redirect('/skills');
  }


function create(req, res){

	console.log(req.body, "< - req.body is the contents of our form")
	SkillModel.create(req.body)
	// CREATE, UPDATE, DELETE always respond with a redirect to a get route
	res.redirect('/skills')
}

function newSkill(req, res){
	// render looks in the views folder
	// for the ejs page you want to return to the client
	res.render('skills/new')
}

// ctrl index function always responds
// with all of a certain resource
// for example, responds with all 
function index(req, res){

	// send to the client when a request made to the server
	
	// render automatically looks for files in the views folder!
	res.render('skills/index', {skills: skillModel.getAll()})
	// the key on the object  will be a variable in the todos/index page
	
}

function show(req, res){

	console.log(req.params, " <- req.params")
	
	res.render('skills/show', {skill: skillModel.getOne(req.params.id)})
}