var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')
const skill = require('../models/skill');

// All actual paths begin with '/Skills'  

//GET /skills
router.get('/', skillsCtrl.index);
//GET /skills/new
router.get('/new', skillsCtrl.new)
//GET /skills/:id
router.get('/:id', skillsCtrl.show);
//POST /skills
router.post('/', skillsCtrl.create);
//DELETE /todos/:id
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
