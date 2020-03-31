//orang tua (parent)
var Kendaraan = function(warna) {
    //
    this.warna = warna;
}

//turunan
var Mobil = function(warna) {
    Kendaraan.call(warna);
    console.log("turunan dari kendaraan");
}
//karena JS first objek maka dibuat objek dulu : 
Mobil.prototype = Object.create(Kendaraan.prototype);

//konstruktor ini pemanggilannya.
Mobil.prototype.constructor = Mobil;

  //construktor => dipakai ketika function/ class kendaraan digunakan
var mobil = new Kendaraan('biru');
var corola = new Mobil('hijau misal');

console.log(corola.Mobil);
console.log(mobil.warna);
