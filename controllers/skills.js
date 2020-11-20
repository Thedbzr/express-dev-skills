const Skill = require("../models/skill");

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
}

function deleteSkill(req,res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills')
}

function create(req, res) {
    // Thanks to urlencoded middleware
    console.log(req.body);
    // The model is responsible for creating data
    Skill.create(req.body);
    // Always do a redirect when data is CUD'd
    // redirects always tell the browser to make
    // a new GET request to the provided path
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new')
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: Skill.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
    })
}