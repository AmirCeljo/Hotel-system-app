<template>
    
        
        <form @submit="onSubmit">
            <div class="form-group">
            <h1>Dodaj novi sektor</h1>
            
        </div>
        <div class="form-group">
           
           <h2> {{nextSector}} </h2>
        </div>
        
        <div class="form-group">
            <input type="submit" class="form-submit">
        </div>
        </form>
    
</template>


<script>
import axios from 'axios'
import SideNav from '../../components/SideNav'
    export default {
        name: 'DodajSektor',
        components: {SideNav},
        data(){
            return{
                sector:'',
                nextSector: ''
            }
        },
        methods:{
            async onSubmit(e){
                e.preventDefault()
                const sektor = {
                    sectorname:this.nextSector,
                    id:this.$store.state.user._id,
                    username:this.$store.state.user.username,
                    firstname: this.$store.state.user.firstname,
                    lastname:this.$store.state.user.lastname
                }
                const result = await axios.post('https://hotel-menagment-app-vue-app.herokuapp.com/dodajsector',sektor )
               
                this.sector = ''
            }  
        },
        mounted() {
            if(this.$store.state.user.role != 'sef'){
                this.$router.push(`/${this.$store.state.user.role}`)
            }

            axios.get('https://hotel-menagment-app-vue-app.herokuapp.com/svisektori')
            .then(result => {
                let num = result.data.length + 1
                this.nextSector = 'Sektor ' + num
            })
            .catch(err => console.log(err))
 
            this.$store.state.sidenav = false;
    


        }
    }
</script>


<style scoped>
  
     form{
        margin: auto;
        margin-top:10%;
        padding:20px 20px 40px 20px;
     
        width:30%;
        border-radius:5px ;
        box-shadow:2px 7px 7px 3px rgb(228, 228, 228);
        line-height: 3rem;
        /* transform: translate(-25%,0%) */
    }
    h1{
        text-align: center;
        margin-bottom:20px;
        color:cornflowerblue;
    }
    h2{
        text-align: center;
        margin-bottom:20px;
        color: orangered;
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
        /* border:2px solid cornflowerblue; */
        border:none;
        background-color:cornflowerblue;
        padding:10px 15px;
        color:white;
        cursor:pointer;
        margin-top:30px;
        border-radius:50px;
    }
    @media (max-width:567px) {
        form{
            width:80%;
            margin-top:22% ;
        transform: translate(-0%,0%)

        }
    }
    
</style>