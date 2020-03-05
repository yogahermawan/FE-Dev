// promise
axios.get('')
.then((response)=>{
    console.log(response);
})
.catch((error)=>{console.log(error);
})

// async/await
async function data(params) {
    let posts = axios.get('');
}
