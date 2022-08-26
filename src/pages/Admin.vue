<template>
    <div class="admin-container">
       
      <SideNav />
      <Profile />
     
      
    </div>
</template>

<script>
  import SideNav from '../components/SideNav'
  import Profile from '../components/profiles/Profile.vue'
  export default {
      name: 'Admin',
      components:{SideNav, Profile},
     
      mounted(){
        
        const korisnik = this.$store.state.user
        
        if(!korisnik){
          this.$router.push('/')
        }
           
        if(korisnik.role != 'admin'){
          this.$router.push(`${korisnik.role}`)
        }
    
      }
      
  }
</script>

<style scoped>
  .admin-container{
      display: flex;
      width:100%;
      height:90vh;
  }
  .admin-container h1{
    text-align: center;
  }    

</style>