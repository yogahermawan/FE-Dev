const readline = require('readline');

function getDiceAnswer() {
    return new Promise(resolve => {    
        const rl = readline.createInterface({
            input:  process.stdin,
            output: process.stdout
        });
        rl.question("Masukkan text ? ", (answer) => {
            resolve(answer);
            rl.close();
        });
    });   
}
var lines = [];
getDiceAnswer().then(answer => {
    lines.push(answer);
    console.log(lines);
    // console.log(answer);
    
    var re =  /^[a-zA-z]{1,2}\s?\d{1,4}\s?[a-zA-Z]{1,3}$/i;
    function CheckPlatNomor(answer) {  
    var OK = re.exec(answer);
    if (!OK)  
        console.log(answer + ' bukan plat nomor Indonesia!');  
    else
        console.log('Plat nomor Indonesia, plat nomor anda adalah ' + OK[0]);  
    }
    CheckPlatNomor(lines);

});
