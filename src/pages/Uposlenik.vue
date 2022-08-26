<template>
    <div class="uposlenik-div">
        <SideNav />
        <Profile />
    </div>
</template>

<script>
    import SideNav from '../components/SideNav'
    import Profile from '../components/profiles/Profile.vue'
import axios from 'axios'
    export default{
        name: 'Uposlenik',
        components: {SideNav,Profile},
        data(){
            return{
                user: JSON.parse(localStorage.getItem('user')),
                svesobe: []
            }
        },
        mounted(){
            const korisnik = this.$store.state.user
        
            if(!korisnik){
                this.$router.push('/')
            }

            if(korisnik.role != 'uposlenik'){
                this.$router.push(`${korisnik.role}`)
            }            
        }
        
    }
</script>

<style scoped>
    .uposlenik-div{
        display: flex;
        width:100%;
        height:90vh;
    }
</style>

