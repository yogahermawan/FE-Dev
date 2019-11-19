<template>
  <div class="home">
    <Navbare/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="haii"/>
    {{nama}}
    <ul>
      <li v-for="(ident, index) in identitas" :key="index"></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Navbare from '@/components/Navbar.vue';
const column=[
  {"nama": "siapa ya.."},
  {"nama": "siapa ya3"},
  {"nama": "siapa ya2"},
]
export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbare,
  },
  data() {
    return {
      nama: 'yoga hermawan',
      identitas: [column],
    }
  },
}
</script>
