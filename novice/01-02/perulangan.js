for (let index = 10; index >= 1; index--) {
    console.log(index);
}
// angka=11;
// while (angka<=10) {
//     console.log(angka);
//     angka++;
// }

// do {
//     console.log(angka);
//     angka++;
// } while (angka<=10);

var nama = {
    "nama1": "Yoga",
    "nama2": "Hendi"
}

for (const key in nama) {
    console.log(key+" : "+nama[key]);
}
var alamat = ["janti", "sleman", "bantul"]
for (const i of alamat) {
    console.log(i);
    var data = "string";
    function mbuh() {
        console.log(data);
    }
    console.log(data);
}

var range = {
    from : 1,
    to : 5
}
for (const i of range) {
    console.log(i);
}
