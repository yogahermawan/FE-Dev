const axios = require('axios');

//promise
// axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//         // console.log(res.data.userId);
//         for (const i of res.data) {
//             console.log(i.title);
//         }
//     })
//     .catch((e)=> {
//         console.log(e);
//     })

// async/ await
async function ambilData() {
    var data = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(data.data.title);
}

ambilData();