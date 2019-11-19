//
let mutableName = "praxis";
mutableName = "academmy";

const immutabilityName = "Daerah Istimewa Yogyakarta";

let mutableKota = ["Janti", "Kalasan"];
mutableKota.push("Ngemplak");

// console.log(mutableKota);

const immutKota = ["Janti", "Kalasan"];
let newImmutability = immutKota.concat("Ngemplak");

console.log(immutKota);
console.log(newImmutability); 

// var newImmutES6 = [...immutKota, "Ngemplak"];

// console.log(newImmutES6);
