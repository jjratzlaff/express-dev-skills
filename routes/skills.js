var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')
/* GET users listing. */



// if wanted to make an http request to this route
// it would localhost:3000/skills
// /skills/
router.get('/', skillsCtrl.index);



// GET request to /skills/new
router.get('/new', skillsCtrl.new);

// POST request to /skills
router.post('/', skillsCtrl.create)


router.delete('/:id', skillsCtrl.delete);
// example requests
// /skills/1
// /skills/2
// /skills/99
// :id is called a request parameter,
// inside the show function in the ctrl
// you have a req.params object with a key
// of id
router.get('/:id', skillsCtrl.show)
module.exports = router;
