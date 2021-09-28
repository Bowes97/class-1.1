function Human (){}
Human.prototype.speak = function(){
    console.log('Hello');
}
function Woman (gender){
    Human.call(this)
    this.gender = gender
}
Woman.prototype = Object.create(Human.prototype);
Woman.prototype.constructor = Woman;
Woman.prototype.sex = function(){
    console.log(`My gender is ${this.gender}`);
}
function Librarian (gender, school){
    Woman.call(this, gender);
    this.school = school
}
Librarian.prototype = Object.create(Woman.prototype);
Librarian.prototype.constructor = Librarian;
Librarian.prototype.job = function(){
    console.log(`Alina works ${this.school}`);
}
let librarian = new Librarian('Female','school librarian')
librarian.speak()
librarian.sex()
librarian.job()
function Nurse (gender,hospital){
    Woman.call(this, gender);
    this.hospital = hospital
}
Nurse.prototype = Object.create(Woman.prototype)
Nurse.prototype.constructor = Nurse;
Nurse.prototype.place = function(){
    console.log(`Olga works in ${this.hospital}`);
}
let nurse = new Nurse('Female','Hospital')
nurse.speak()
nurse.sex()
nurse.place()
function Man (name){
    Human.call(this)
    this.name = name
}
Man.prototype = Object.create(Human.prototype);
Man.prototype.constructor = Man;

Man.prototype.firstName = function(){
    console.log(`My name is ${this.name}`);
}
function Hunter (name, activity){
    Man.call(this, name);
    this.activity = activity;
}
Hunter.prototype = Object.create(Man.prototype)
Hunter.prototype.constructor = Hunter

Hunter.prototype.hobby = function(){
    console.log(`I love ${this.activity}`);
}
let hunter = new Hunter ('Perto', 'hunt')
hunter.speak()
hunter.firstName();
hunter.hobby()
function Worker (name, work){
    Man.call(this, name)
    this.work = work
}
Worker.prototype = Object.create(Man.prototype)
Worker.prototype.constructor = Worker

Worker.prototype.jobs = function(){
    console.log(`I love ${this.work}`);
}
let worker = new Worker('Ivan','work')
worker.speak()
worker.firstName()
worker.jobs()
