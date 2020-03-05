// let kata = {
// 	nama1: "yoga",
//     nama2: "hermawan"
// }

// for (const key in kata) {
//     console.log(key.Math.random(key).toString());
// }

function randomString() {
    // var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let kata = {
        nama1: "yoga",
        nama2: "hermawan"
    }
    var chars = JSON.stringify(kata);
    console.log(chars);
    
	var string_length = 8;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        console.log(rnum);
        
		randomstring += chars.substring(rnum,rnum+1);
	}
	console.log(randomstring);
}

console.log(randomString());
