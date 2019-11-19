<template>
  <div>
      <h1>Hello from Vue</h1>
      <ul>
          <li v-for="(user, index) in data" :key="index">
              {{user.repos_url}}
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            pesan: 'Hello world from vue!!',
            data: [],
        }
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        getUsers(){
            axios.get('https://api.github.com/users')
            .then((resp)=> {
                this.data = resp.data
                console.log(resp.data)
            })
            .catch((err)=> {
                console.log(err);
            })
        }
    },
}
</script>