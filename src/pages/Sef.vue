<template>

    
     <div class="sef-container">
        
        <SideNav />
        <Profile />
    </div>

   
</template>

<script>
    import axios from 'axios'

    import SideNav from '../components/SideNav';
    import Profile from '../components/profiles/Profile.vue'

    export default {
        name:'Sef',
        components: {SideNav,Profile},
       
                 
        mounted(){
              
            const korisnik = this.$store.state.user
            
            if(!korisnik){
                this.$router.push('/')
            }
                
            if(korisnik.role != 'sef'){
                this.$router.push(`${korisnik.role}`)
            }
        }
    }
</script>

<style scoped>
    .sef-container{
           
      display: flex;
      width:100%;
      height:90vh;
      position:relative;
    }
     .header{
    height:10vh;
    background-color:cornflowerblue;
  }
</style>