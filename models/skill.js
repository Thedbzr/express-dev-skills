const skills = [
  {id: 0, skill: 'Javascript'},
  {id: 1, skill: 'HTML'},
  {id: 2, skill: 'CSS'},
  {id: 3, skill: 'EXPRESS'},
  {id: 4, skill: 'NODE'}
];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function deleteOne(id){
    id = parseInt(id);
    const idx = skills.findIndex(s => s.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    skill.id = Date.now() % 100;
    skills.push(skill)
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }