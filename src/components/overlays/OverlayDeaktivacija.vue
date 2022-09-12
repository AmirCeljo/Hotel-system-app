<template>
     <div class="overlay">
            <div class="times" v-on:click="closeWindow"><font-awesome-icon icon="fa-solid fa-times"/></div>
               
                <div class='form' v-for="k in korisnik" v-bind:key="k">
                    
                        
                    <div class='side' v-if="k.status == 'active' ">
                       <div v-if="k.gender == 'female' " class='image'>
                            <img src="../../zenskiavatar.jpg"
                                alt="">
                        </div>
                        <div v-if="k.gender == 'male' " class="image">
                            <img src="../../muskiavatar.jpg"
                                alt="">
                        </div>
                        <h3>{{k.firstname}} {{k.lastname}}</h3>
                    </div>
                    <div class='side-red' v-if="k.status =='deactivated' ">
                        <div v-if="k.gender == 'female' " class='image'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                alt="">
                        </div>
                        <div v-if="k.gender == 'male' " class="image">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                alt="">
                        </div>
                        <h3>{{k.firstname}} {{k.lastname}}</h3>
                    </div>
                    <div class='info'>
                        <h2>Izbornik za korisnika</h2>
                        <div class="divider"></div>
                        <div class="info-group">
                            <div>
                                <h3>Email</h3>
                                <p>{{k.email}}</p>
                            </div>
                            <div>
                                <h3>Role</h3>
                                <p>{{k.role}}</p>
                            </div>
                        </div>
                        <div class="info-group">
                            <div>
                                <h3>Username</h3>
                                <p>{{k.username}}</p>
                            </div>
                            <div>
                                <h3>Status</h3>
                                <p v-if="k.status == 'active' " class="blue">{{k.status}}</p>
                                <p v-if="k.status == 'deactivated' " class="red">{{k.status}}</p>
                            </div>
                        </div>
                        
                        <div class="divider"></div>

                        <form  @submit='(e)=>{
                    e.preventDefault()
                    onSubmitDeaktiviraj(this.korisnik)
                    }' v-if='k.status == "active" ' >
                    
                    <div class="form-group">
                        <input type="submit" class="submit-btn-deaktiviraj" value="Deaktiviraj"/>
                    </div>
                    </form>
                     <form  @submit='(e)=>{
                    e.preventDefault()
                    onSubmitAktiviraj(this.korisnik)
                    }' v-if='k.status == "deactivated"  '>
                    
                    <div class="form-group">
                        <input type="submit" class="submit-btn-aktiviraj" value="Aktiviraj"/>
                    </div>
                    </form>
                     
                    
                    </div>
                     
                </div>
            </div>
</template>


<script>
    import axios from 'axios'
    export default {
        name: 'OverlayDeaktivacija',
        props: ['korisnik'],
        methods:{
            
             async onSubmitDeaktiviraj(korisnik){
                const result = await axios.post('http://localhost:5000/deaktivirajkorisnika',korisnik[0])
                
                this.$router.go()
            },
             async onSubmitAktiviraj(korisnik){
                const result = await axios.post('http://localhost:5000/aktivirajkorisnika',korisnik[0])
                this.$router.go()
            },
            closeWindow(){
                document.querySelector('.overlay').style.display = 'none'
            },
            
        }
    }

</script>


<style scoped>
   .overlay{
        background: rgba(0, 0, 0, 0.499);
        
        display: none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width:100%;
        height: 100vh;
        position: fixed;
        top:0%;
        left:0%;
        z-index: 30;
        line-height: 2rem;
    }
    .form{
        width: 40%;
        
        text-align: center;
      
        display: flex;
        
    }
    @media (max-width:567px) {
        .form{
            width:95%;
        }
    }
    .side, .side-red{
        width:30%;
        background: linear-gradient(to right , rgb(255, 185, 54), rgb(255, 59, 59));
        border-top-left-radius: 5px;
        border-bottom-left-radius:5px ;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color:white;
    }
    .side{
        background: linear-gradient(to right , rgb(98, 73, 255), rgb(161, 73, 255));
    }
    .side-red{
        background: linear-gradient(to right , rgb(255, 185, 54), rgb(255, 59, 59));
    }
    img{
        width:100px;
        height:100px;
        border-radius: 50%;
        
    }
    .info{
        width:70%;
        background:white;
        color:gray;
         border-top-right-radius: 5px;
        border-bottom-right-radius:5px ;
       padding:10px;
    }
    .info-group{
        display: flex;
        justify-content: center;
        align-items: center;
        margin:3% 0%;
        gap:10px;
    }
    .info-group > div{
        width:50%;
        background-color:rgb(243, 243, 243);
        padding:3px;
        border-radius: 5px;
    }
    .divider{
        width:100%;
        height:1px;
        background: gainsboro;
        margin-top: 4%;
    }
    .submit-btn-deaktiviraj{
        background:transparent;
        border: 1px solid red;
        border-radius: 5px;
        color:red;
        padding: 15px 30px;
        cursor:pointer;
        margin-top: 5%;
        
    }
     .submit-btn-aktiviraj{
        background:transparent;
        border: 1px solid cornflowerblue;
        border-radius: 5px;

        color:cornflowerblue;
        padding: 15px 30px;
        cursor:pointer;
        margin-top: 5%;
        
    }
    .times{
       width:40%;
        text-align: right;
        margin: 0% auto;
        font-size:30px;
        font-weight:500;
        color:white;
        cursor:pointer;
    }
    .blue{
        color:cornflowerblue;

    }
    .red{
        color:red;
    }
</style>