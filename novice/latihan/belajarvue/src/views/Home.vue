<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <DataDiri/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import DataDiri from '@/components/DataDiri.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    DataDiri
  }
}
</script>
