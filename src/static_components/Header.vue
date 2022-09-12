<template>
    <div class="header"  >
        
        
        <h1 v-if="this.$store.state.user"><a href="">{{this.$store.state.user.role}}</a></h1>
        
        <h1>Hotel Menagment App</h1>

        <button v-if="this.$store.state.user"  type="button" v-on:click="() => {
            prikaziSideNav()
            }">
            <font-awesome-icon icon="fa-solid fa-bars"></font-awesome-icon>
        </button>
        <button v-if="!this.$store.state.user" type="button" v-on:click="showAlert()">
            <font-awesome-icon icon="fa-solid fa-gear" />
        </button>
    </div>
</template>

<script>
    
    export default  {
        name:'Header',
        
        
        methods:{
            prikaziSideNav(){
                if(this.$store.state.sidenav){
                    if(window.innerWidth > 570){
                        document.querySelector('.side-nav').style = 'animation: slideIn .2s ease-in forwards';
                        this.$store.state.sidenav = false
                    }
                    else if(window.innerWidth < 570){
                        document.querySelector('.side-nav').style = 'animation: slideOutMobile .2s ease-in forwards';
                        this.$store.state.sidenav = false
                    }
                    
                }
                else if(!this.$store.state.sidenav){
                    if(window.innerWidth > 570){
                          document.querySelector('.side-nav').style = 'animation:slideOut .2s ease-in forwards';
                    this.$store.state.sidenav = true;


                    }
                    else if(window.innerWidth < 570){
                        document.querySelector('.side-nav').style = 'animation: slideInMobile .2s ease-in forwards';
                    this.$store.state.sidenav = true;

                    }

                }
                
            }
            ,
           showAlert(){
                alert(`
                Log in as an Admin : 
                Admin can add new user , delete , update or deactivate existing user
                username - admin
                password - 123456

                Log in as an Sef(boss):
                Boss can add new sector(floor) in hotel , add workers and rooms to sector and see what employers do on their panel
                username - sef
                password - 123456

                Log in as an Uposlenik (employer):
                Employer can get information from the guest , and reserve free room as well as see reserved rooms and all rooms that boss have added.
                username - uposlenik
                password - 123456
                `)
                }
        }
    }
</script>

<style scoped>
    a {
        color:white;
    }
    h1{
        color:white;
    }
    button{
        font-size:30px;
        padding:5px 10px;
        color:white;
        background-color:transparent;
        border:none;
        cursor:pointer;
    }
    .header{
        display: flex;
        justify-content: space-between;
        gap:20px;
        align-items: center;
        
        background-color: cornflowerblue;
        border-bottom:1px solid gainsboro;
        color: white;
        height:10vh;
        text-transform: capitalize;
        padding: 0% 1%;
    }
    .nav{
        display: flex;
        justify-content: center;
        align-items: center;
        gap:15px;
    }
   
    @media (max-width:567px) {
        .header{
            font-size:13px;
        }
    }
   
</style>