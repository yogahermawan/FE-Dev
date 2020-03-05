const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
.then((res)=> {
    // let results = JSON.stringify(res.data);
    // console.log(results);
    for (const element of res.data) {
        console.log(JSON.stringify(element));
      }
})
.catch((error) => {
    console.log(error);
})
