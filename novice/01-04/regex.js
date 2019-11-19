var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);

//coba dari kata kata
let kata = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Aut eius ipsam possimus tempore perferendis amet ea molestias
dolor cumque quo. Repellendus blanditiis voluptatibus similique nobis? Iusto, rem eveniet! Sit, accusamus!`;

let cari = kata.search(/sit/);

console.log(cari);
