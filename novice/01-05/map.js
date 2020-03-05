var myMap = new Map();// bisa sama / berbeda
myMap.set("buah", "nanas");
myMap.set("buah", "nanas");
myMap.get("buah");
myMap.delete("buah");

var myWeakMap = new WeakMap();
myWeakMap.set(1, "oke");
myWeakMap.set(1, "oke");

console.log(myWeakMap.get(1));

// var mySet = new Set();
// var keyString = "a string",
//     keyObj = {},
//     keyFunc = function () {};

// mySet.set(1, "satu");
// mySet.set(2, "dua");
// // mySet.set(1, "satulagi");

// console.log(mySet.get(1));

// // setting the values
// myMap.set("sapi", "cow");
// myMap.set("sapi", "cow");

// myMap.set("semut", "ant");
// myMap.set(keyFunc, "value associated with keyFunc");

// console.log(myMap.size); // 3

// console.log(myMap.get(keyString)); // 3


// // getting the values
// myMap.get(keyString);    
// myMap.get(keyObj);       
// myMap.get(keyFunc);      

// myMap.get("a string");   
                         
// myMap.get({});           
// console.log(myMap.get(function() {})); //undifined

// let arr = [1,2, 3, 4, 4];
// let arr2 = [2, 3, 4, 5, 2];

// let squeres = arr.map((a, i) => a+ arr2[i]);

// console.log(squeres);