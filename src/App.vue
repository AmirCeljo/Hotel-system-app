<template>
  <div> 
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './static_components/Header.vue'


export default {
  name: 'App',
  components: {Header},
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300&display=swap');
  body{
    height: 100vh;
    /* background: url('../public/google-pattern-3.jpg')no-repeat center center/cover; */
  }
  *{
    font-family: 'Figtree', sans-serif;
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    
  }
   
</style>
