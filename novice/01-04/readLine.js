const readline = require('readline');

function getDiceAnswer() {
    return new Promise(resolve => {    
        const rl = readline.createInterface({
            input:  process.stdin,
            output: process.stdout
        });
        rl.question("Masukkan text ? ", (answer) => {
            resolve(answer);
            console.log("Will keep dices: ", answer);
            let hasil = answer;
            rl.close();
        });
    });   
}
let kata = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Aut eius ipsam possimus tempore perferendis amet ea molestias
dolor cumque quo. Repellendus blanditiis voluptatibus similique nobis? Iusto, rem eveniet! Sit, accusamus!`;
let lines = [];

getDiceAnswer().then(answer => {
     lines.push(answer);
     console.log(lines);
});