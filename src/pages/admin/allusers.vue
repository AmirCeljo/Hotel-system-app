<template>

   
    
        
        

        
        <div class="allusers">
        <h1>Svi korisnici</h1>
            <div class="head">
                <div><h3>ID</h3></div>
                <div><h3>Ime i Prezime</h3></div>
                <div><h3>Email</h3></div>
                <div><h3>Adresa</h3></div>
                <div><h3>Uloga</h3></div>
                <div><h3>Status</h3></div>
                <div><h3>Opcije</h3></div>

            </div>
            <div class="body" v-for="users in allusers" v-bind:key="users">
                <div v-for="user in users" v-bind:key="user">
                    <UserCard :user="user" @current-user='eventOnClick' />
                </div>
                
               
            
            </div>
            <OverlayDeaktivacija :korisnik="this.korisnik" />
            <OverlayEdit :korisnik="this.korisnik" />
        </div>
 

</template>

<script>
import axios from 'axios'


import UserCard from '../../components/adminusers/UserCard'
import OverlayDeaktivacija
 from '../../components/overlays/OverlayDeaktivacija'
import OverlayEdit from '../../components/overlays/OverlayEdit'
    export default {
        name:'Allusers',
        components: {UserCard,OverlayDeaktivacija,OverlayEdit,},
       
        data(){
            return{
                allusers: [],
                korisnik: []
            }
        },
        methods:{
            
            eventOnClick (user) {
       
                if(this.korisnik.length > 0){
                    this.korisnik.splice(0,this.korisnik.length)
                    this.korisnik.push(user)
                }
                else{
                    this.korisnik.push(user)
                }
                
                
                } ,
           
         
            
        },
        mounted(){
            const fetchUsers = async () => {
                const result = await axios.get('https://hotel-menagment-app-vue-app.herokuapp.com/getallusers');
                this.allusers.push(result.data)
                console.log(result)
            }
            fetchUsers()

            if(this.$store.state.user.role != 'admin'){
                
                this.$router.push(`/${this.$store.state.user.role}`)
                
            }
         
            this.$store.state.sidenav = false;
      


        }
    }
</script>

<style scoped>
    

    h1{
        text-align: center;
        margin-bottom:4%;
        color:gray;
        padding:10px;
       
    }
    .allusers{
        width:70%;
        margin:auto;
        margin-left:2%;
        margin-top:5%;
        
        padding:15px;
        background-color:gainsboro;
        /* background: url('../../../public/google-pattern-4.jpg') no-repeat center center/cover; */

         border-top-right-radius:5px;
        border-top-left-radius:5px;
        /* transform:translate(-5%,0%); */
       
    }
    .head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color:gray;
        margin-bottom:2%;
        gap:15px;
        padding:10px 40px 10px 20px;
    }
    .head > div{
        width:200px;
        
    }
    .body{
        width:100%;
        overflow-y: scroll ;
         max-height: 45vh;
         padding: 10px 20px;
         
         background: gainsboro;
    }
    
    /* .allusers{
        display:grid;
        max-height: 70vh;
        scroll-behavior: smooth;
        grid-template-columns: repeat(2,1fr);
        gap:15px;
        margin-top:3%;
        background-color: rgb(241, 241, 241);
        border-radius:5px;
        padding:15px;
        overflow: hidden;
        overflow-y: scroll ;
    } */

    @media (max-width:567px) {
        .allusers{
            width:100%;
        z-index: 0;
        margin-left:0%;
        
        }
        .head{
            display: none;
        }
        .body{
            max-height: 70vh;
            background:cornflowerblue;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
         padding: 20px 10px;

        }
    }
        
    
</style>