class Hero{
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    //menambahkan method konstruktor
    greet() {
        return `${this.name} says hello.`;
    }
}

class turun extends Hero{
    
}