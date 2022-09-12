<template>
  <div> 
    <Header />
    <div class="container">
      <SideNav />
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import Header from './static_components/Header.vue'
import SideNav from './components/SideNav.vue'

export default {
  name: 'App',
  components: {Header, SideNav},
  mounted(){
         window.addEventListener('resize' , () => {
            

            if(window.innerWidth > 600){
        
                document.querySelector('.side-nav').style = "transform: translate(0%,0%)"
            }else{
                document.querySelector('.side-nav').style = "transform: translate(-100%,0%)"
            }
        })          
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300&display=swap');
  body{
    /* height: 100vh; */
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
  .container{
    width:100%;
    max-height:90vh;
    
    display:flex;
  }
   @keyframes slideIn {
        from{transform: translate(-100%,0%)}
        to{transform: translate(0%,0%)}
    }

    @keyframes slideInMobile {
        from{        transform: translate(-100%,0%);
}
        to{        transform: translate(0%,0%);
}
    }
     @keyframes slideOut {
        from{transform: translate(0%,0%)}
        to{transform: translate(-100%,0%)}
    }
    @keyframes slideOutMobile{
        from{        transform: translate(0%,0%);
}
        
        to{  transform: translate(-100%,0%);}
    }
</style>
