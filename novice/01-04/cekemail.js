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
    var re = /[\w+]+@([\w+]+\.)+[\w+]+$/;
    var rgname = /([^@]*)/;
    var rgtld = /[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
    function CheckEmail(answer) {
        var OK = re.exec(answer);
        var uname = rgname.exec(answer);
        var nametld = rgtld.exec(answer);
        if (!OK)
            console.log(answer + ' Format email salah!');
        else {
            console.log('Halo, usernama anda ' + uname[0] + ' adalah domain anda adalah ' + nametld[0]);
        }
    }
    CheckEmail(answer);
});

