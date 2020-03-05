<template>
  <div class="datadiri">
    <h2>Belajar Component</h2>

    <h3>Component in {{nama}}</h3>
    <div v-for="(i, index) in post" :key="index" style="background-color:blue; border:20 px;" >{{i.title}}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    nama: "VUE JS",
    post: []
  }),
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let posts = axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
          console.log(res);
          this.post = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.datadiri {
  background-color: aquamarine;
}
</style>