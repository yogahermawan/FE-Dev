<template>
  <div class="about">
    <Navbare/>
    <Navbare/>
    <Navbare/>

    <h1>This is an about page</h1>
    <ol>
      <li v-for="(tampil, index) in data" :key="index">
          {{tampil.body}}
      </li>
    </ol>
  </div>
</template>

<script>
import Navbare from '@/components/Navbar.vue';
import axios from 'axios';
export default {
  components:{
    Navbare,
  },
  data() {
    return {
      data: [],
    }
  },
  mounted(){
    this.getData();
  },
  methods: {
    async getData(){
      let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.data = response.data
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })      
    }
}}
</script>