// const axios = require('axios');
//  // async/ await
// async function firstAsync() {
//   //selesai
//   let njupuk = await axios.get('https://jsonplaceholder.typicode.com/users');
//   this.data = njupuk.data;
//   console.log(njupuk.data);
//     };
// firstAsync();

// promise 
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    console.log(response.data.title);
  })
  .catch(function (error) {
    console.log('ada error');
    console.log(error);
  })
  .finally(function () {
  });


// let promise = new Promise((res) => {
//   setTimeout(() => res("Now it's done!"), 5000)
// });
// let result = promise;

// console.log(result);

// const myPromise = new Promise((resolve) => {
//   setTimeout(() => resolve("Completed!"), 5000)
// });

// async function foo() {
//   const result = await myPromise;
//   console.log(result);
//    // Wait here until the promise settles
// }