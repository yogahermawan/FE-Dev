class Manusia{
    constructor(warna, mata, kulit){
        this.warna
        this.mata;
        this.kulit;
    }
    rambut(){
        return `${this.warna} Warna rambutmu coklat `
    }
    mata(){
        return `${this.mata} mata panda`
    }
    kulite(){
        return `${this.kulit} kulitnya putih`
    }
}

class Mahasiswa extends Manusia{
    constructor(warna, mata, kulit){
        super(warna, mata, kulit);
    }
    nim(){
        return '82467916736';
    }
}

class Karyawan extends Manusia{
    constructor(warna, mata, kulit){
        super(warna, mata, kulit);
    }
    nip(){
        return '12232421153';
    }
    cirikhas(){
        return `${super.kulite} warna kulit manusia`
    }
}

function tampil(hasil) {
    console.log(hasil);
}

let employe = new Karyawan(); //Pemanggilan/ create constructor
// tampil(employe.nip());
tampil(employe.cirikhas());

let student = new Mahasiswa();
tampil(student.nim());