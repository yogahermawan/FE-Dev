function Orang() {
    return 'weehee';
}

console.log(Orang.prototype.test = "namanya siapa yaa");

//example prototype
function Animals() { }
Animals.prototype.speak = function () { return this; }

Animals.eat = function() { return this; }

let objek = new Animals();
let spk = new objek.speak;

let eat = Animals.eat;
eat();