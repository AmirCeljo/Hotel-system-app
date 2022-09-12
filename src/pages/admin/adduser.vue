<template>
   
        
        <div class="form">
        <h1>Dodaj korisnika</h1>

         <form @submit="onSubmit">
        <div class="form-group">
            
            <select name=""  v-model="option" class="form-control">
                <option value="none">Izaberite opciju</option>
                <option value="admin">Admin</option>
                <option value="sef">Šef</option>
                <option value="uposlenik">Uposlenik</option>

            </select>
        </div>
        <div class="form-group register-group">
            <!-- <label for="username">Username</label> -->
            <select name=""  v-model="gender" class="form-control">
                <option value="none">Spol</option>
                <option value="male">Muški</option>
                <option value="female">Ženski</option>
            </select>
            
        </div>
        <div class="form-group register-group">
            <!-- <label for="username">Username</label> -->
            <input type="text" class="form-control" v-model="firstname"  placeholder="Unesite Ime"/>
            <input type="text" class="form-control"  v-model="lastname"  placeholder="Unesite Prezime"/>
        </div>
        <div class="form-group register-group">
            <!-- <label for="username">Username</label> -->
            <input type="text" class="form-control"  v-model="username"   placeholder="Unesite username"/>
            <input type="password" class="form-control"  v-model="password"  placeholder="Unesite password"/>
        </div>
         <div class="form-group register-group">
            <!-- <label for="username">Username</label> -->
            <input type="text" class="form-control"  v-model="address"  placeholder="Unesite Adresu"/>
            <input type="email" class="form-control" v-model="email" placeholder="Unesite Email"/>
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
    export default{
  components: { SideNav },
        name: 'Adduser',
        data (){
            return {
                option:'Izaberite opciju',
                gender: 'Spol',
                firstname: '',
                lastname: '',
                username:'',
                password:'',
                address:'',
                email:'',
                status:'active',
                
            }
        },
        methods: {
            async onSubmit(e){
                e.preventDefault()

                if(!this.option || !this.gender || !this.firstname || !this.lastname || !this.username || !this.password || !this.address || !this.email){
                    alert('Molimo popunite formu pravilno !')
                }

                const noviKorisnik = {
                    option: this.option,
                    gender: this.gender,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    username: this.username,
                    password: this.password,
                    address: this.address,
                    email: this.email,
                    status:this.status
                }

                const result = await axios.post('https://hotel-menagment-app-vue-app.herokuapp.com/admin/adduser', noviKorisnik)
               

                this.option = '';
                this.gender =''
                this.firstname = ''
                this.lastname = ''
                this.username = ''
                this.password = ''
                this.address = ''
                this.email = ''
            }
        },
       
        mounted(){
            if(this.$store.state.user.role != 'admin'){
                this.$router.push(`/${this.$store.state.user.role}`)
            }

         
            this.$store.state.sidenav = false;
           


        }
    }
</script>

<style scoped>
  
    .form{
        width:50%;
        margin:5% auto;
        padding:30px 15px;
        background-color:rgb(238, 238, 238);
        /* background: url('../../../public/google-pattern-4.jpg') no-repeat center center/cover; */
box-shadow:2px 7px 7px 3px rgb(228, 228, 228);
        /* transform:translate(-10%,0%); */
        border-radius:5px;
    }
   
   form{
        margin:0;
        padding:20px 20px 40px 20px;
       
      
        border-radius:5px ;
        /* box-shadow:2px 7px 7px 3px rgb(228, 228, 228); */
        line-height: 3rem;
    }
    h1{
        text-align: center;
        margin-bottom:20px;
        color:gray;
    }
    .form-group{
        width:70%;
        margin:auto;
    }
    .register-group{
        display: flex;
        justify-content: center;
        align-items: center;
        gap:15px;
    }
    
    select{
        cursor: pointer;
        
    }
    .form-control{
        width:100%;
        padding:10px;
        margin-bottom:10px;
        background:transparent;
        border:none;
        border-bottom:2px solid cornflowerblue;
        
        
    }
    .form-control:focus{
        outline:none;
        border-bottom:2px solid white;
    }w
    .form-control::placeholder{
        color: cornflowerblue;
        font-style: italic;
    }
    .form-submit{
        width:100%;
        border:none;
        background-color:cornflowerblue;
        padding:10px 15px;
        color:white;
        cursor:pointer;
        margin-top:30px;
        border-radius:50px;
    }
    @media (max-width:567px) {
        .form{
            width:80%;
        }
    }
    
</style>