// Sebuah yield, yang menyebabkan generator sekali lagi berhenti
// sementara dan mengembalikan nilai baru dari generator tersebut. Ketika kemudiannext() dipanggil lagi, eksekusi berlanjut dengan statement next setelah yield.

function* sales() {
    let sale=[1, 2, 3];
    for (let i = 0; i < sale.length; i++) {
        yield sale[i];
    }
}

let store = sales(); //Generator {}
console.log(store.next()); // {value : 1 done: false}
console.log(store.next()); // {value : 2 done: false}
console.log(store.next()); // {value : 3 done: false}
console.log(store.next()); // {value : undefined done: true}
