function Hero(name, level) {
    this.name = name;
    this.level = level;
}

// menambahkan method konstruktor
Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}