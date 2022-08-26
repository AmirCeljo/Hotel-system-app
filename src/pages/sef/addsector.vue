<template>
    <div class="add-sector-container">
        <SideNav />
        <form @submit="onSubmit">
            <div class="form-group">
            <h1>Dodaj novi sektor</h1>
            
        </div>
        <div class="form-group">
            <!-- <label for="username">Username</label> -->
            <input type="text" class="form-control" v-model='sector' placeholder="Unesite naziv sektora"/>
        </div>
        
        <div class="form-group">
            <input type="submit" class="form-submit">
        </div>
        </form>
    </div>
</template>


<script>
import axios from 'axios'
import SideNav from '../../components/SideNav'
    export default {
        name: 'DodajSektor',
        components: {SideNav},
        data(){
            return{
                sector:''
            }
        },
        methods:{
            async onSubmit(e){
                e.preventDefault()
                const sektor = {
                    sectorname:this.sector,
                    id:this.user._id,
                    username:this.user.username,
                    firstname: this.user.firstname,
                    lastname:this.user.lastname
                }
                const result = await axios.post('https://hotel-menagment-app-vue-app.herokuapp.com/dodajsector',sektor )
               
                this.sector = ''
            }  
        },
        mounted() {
            if(this.$store.state.user.role != 'sef'){
                this.$router.push(`/${this.$store.state.user.role}`)
            }

            this.$store.state.sidenav = true;

        }
    }
</script>


<style scoped>
    .add-sector-container{
        width: 100%;
        height:90vh;
        display: flex;
       
    }
     form{
        margin: auto;
        margin-top:10%;
        padding:20px 20px 40px 20px;
     
        width:30%;
        border-radius:5px ;
        box-shadow:2px 7px 7px 3px rgb(228, 228, 228);
        line-height: 3rem;
    }
    h1{
        text-align: center;
        margin-bottom:20px;
        color:cornflowerblue;
    }
    .form-group{
        width:100%;
    }
    select{
        cursor: pointer;
    }
    .form-control{
        width:100%;
        padding:10px;
        margin-bottom:10px;
        border:none;
        border-bottom:2px solid cornflowerblue;
        
        
        
    }
    .form-control:focus{
        outline:none;
        border-bottom:2px solid black;
    }
    .form-submit{
        width:100%;
        border:2px solid cornflowerblue;
        background-color:transparent;
        padding:10px 15px;
        color:cornflowerblue;
        cursor:pointer;
        margin-top:30px;
        border-radius:50px;
    }
    @media (max-width:567px) {
        form{
            width:80%;
            margin-top:22% ;
        }
    }
    
</style>