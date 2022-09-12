<template>
    <div class="dashboard-form">
        <div class="dashboard-flex-item-1"></div>
    
        <div class="dashboard-flex-item-2">
            <form @submit="onSubmit">
                    <div class="form-group">
                        <font-awesome-icon icon="fa-solid fa-fingerprint" />
                    </div>
                    <div class="form-group">
                        <h1>Hello , opet </h1>
                        
                        <p> Est voluptas distinctio nam? Doloremque cupiditate dolore dolores aut?</p>
                        
                    </div>
                    <div class="form-group">
                        <!-- <label for="username">Username</label> -->
                        <input type="text" class="form-control" v-model='username' placeholder="Unesite username"/>
                    </div>
                    <div class="form-group">
                        <!-- <label for="password">Password</label> -->
                        <input type="password" class="form-control" v-model="password" placeholder="Unesite password"/>
                        <small>Molimo zapamtite password</small>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="form-submit">
                    </div>
                    <div class="form-group">
                        <p> Logujte se kao admin kako biste registrovali novog uposlenika , sefa ili admina </p>
                    </div>
                </form>
        </div>
    
</div>
</template>

<script>
    import axios from 'axios'
    export default{
        name:'Form',
        data(){
            return{
                username:'',
                password:'',
                
            }
        },
        methods:{
            async onSubmit(e){
                e.preventDefault()

                const korisnik = {
                    username: this.username,
                    password: this.password
                }

                if(!this.username || !this.password){
                    alert('Molimo popunite formu')
                }

                const result = await axios.post('https://hotel-menagment-app-vue-app.herokuapp.com/login',korisnik)

                if(localStorage.getItem('user') === null){

                    if(result.data.status == 'deactivated'){
                        alert('Vas profil je deaktiviran')
                        this.$router.push('/')
                        return ;
                    }
                   
                    localStorage.setItem('user', JSON.stringify(result.data))
                    this.$store.state.user = JSON.parse(localStorage.getItem('user'))
                    
                }

                if(this.$store.state.user){
                    this.$router.push(`/${this.$store.state.user.role}`)

                }
            
                this.username = '';
                this.password = '';
            }
           
    
    
  
        },
        mounted(){
            if(this.$store.state.user){
                this.$router.push(`/${this.$store.state.user.role}`)
            }

            
        }
    }
</script>

<style scoped>
    .dashboard-form{
        width: 60%;
        height:70vh;
        margin:auto;
        margin-top:5%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 1px 5px 2px rgb(228, 228, 228);
        border-radius: 5px;
       
    }
    .dashboard-flex-item-1{
        width:50%;
        height:100%;
        /* background-color:cornflowerblue; */
        background: url('../../public/google-pattern-4.jpg') no-repeat center center/cover;
        border-top-left-radius:5px;
        border-bottom-left-radius: 5px;
    }
    .dashboard-flex-item-2{
        width:50%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border:2px solid rgb(230, 230, 230);
        border-top-right-radius: 5px;
        border-bottom-right-radius:5px;
    }
    form{
        margin:0;
        padding:20px 20px 40px 20px;
        background: white;
        width:65%;
        
        border-radius:5px ;
        /* box-shadow:2px 7px 7px 3px rgb(228, 228, 228); */
        
    }
    h1,h3,p{
        text-align: center;
        margin-bottom:20px;
        color:gray;
    }
    

    .form-group{
        width:100%;
    }
    .form-group small{
        color:gold;
        font-style: italic;
    }
    .form-group p{
        margin-top:5%;
        font-size: 12px;
    }
    .form-group svg{
        display: flex;
        justify-content: center;
        align-items: center;
        width:40px;
        height:40px;
        margin:auto;
        margin-bottom:5%;
        font-size:20px;
        color:cornflowerblue;
    }
    select{
        cursor: pointer;
    }
    .form-control{
        width:100%;
        padding:10px;
        margin-bottom:10px;
        background:white;
        border:2px solid rgb(230, 230, 230);
        border-radius:5px;
        
        
        
    }
    .form-control:focus{
        outline:none;
        border:2px solid cornflowerblue;
    }
    .form-submit{
        width:100%;
        border:none;
        background-color:cornflowerblue;
        padding:12px 15px;
        color:white;
        cursor:pointer;
        margin-top:30px;
        border-radius:50px;
    }
    .form-submit:focus{
        outline:1px solid rgb(154, 154, 154);
        
    }
    input::placeholder{
        color:rgb(230, 230, 230);
        font-style: italic;
    }
    @media (max-width:567px) {
        form{
            width:80%;
        }
    }
    
</style>