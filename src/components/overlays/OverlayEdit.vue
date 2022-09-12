<template>
    <div class="overlay-edit">
         <div class="times" v-on:click="closeWindow"><font-awesome-icon icon="fa-solid fa-times"/></div>
               
                <div class="form" v-for="k in korisnik" v-bind:key="k">
                    <h1>Update korisnika</h1>
                    <small>Izaberite sta zelite da promijenite kod korisnika</small>
                     
                     <div class="info" v-if="k.gender == 'female' " >
                    
                            <img src="../../zenskiavatar.jpg"
                                alt="">

                                <h3>{{k.firstname}} {{k.lastname}}</h3>
                        </div>
                        <div v-if="k.gender == 'male' " class="info-red">
                            <img src="../../muskiavatar.jpg"
                                alt="">

                                <h3>{{k.firstname}} {{k.lastname}}</h3>
                        </div>
                       
                       
                   <div class="update-menu">
                        <button type="button" class="btn-menu"
                        v-on:click="() => {
                            
                            currentActive('contentforchangeusername')
                        }">Username</button>
                        <button type="button" class="btn-menu"
                         v-on:click="() => {
                            
                            
                            currentActive('contentforchangepassword')
                        }">Password</button>
                        <button type="button" class="btn-menu"
                         v-on:click="() => {
                            
                            currentActive('contentforchangefirstname')
                        }">Firstname</button>
                        <button type="button" class="btn-menu"
                         v-on:click="() => {
                            
                            currentActive('contentforchangelastname')
                        }">Lastname</button>
                        <button type="button" class="btn-menu"
                         v-on:click="() => {
                            
                            currentActive('contentforchangeaddress')
                        }">Address</button>
                        <button type="button" class="btn-menu"
                         v-on:click="() => {
                            
                            currentActive('contentforchangeemail')
                        }">Email</button>
                        <button type="button" class="btn-menu"
                         v-on:click="() => {
                            
                            currentActive('contentforchangerole')
                        }">Role</button>



                   </div>
                         
                    <UpdateUsername :korisnik="this.korisnik"/>
                    <UpdatePassword :korisnik="this.korisnik"/>
                    <UpdateFirstname :korisnik="this.korisnik" />
                    <UpdateLastname  :korisnik="this.korisnik" />
                    <UpdateEmail  :korisnik="this.korisnik"/>
                    <UpdateAddress :korisnik="this.korisnik" />
                    <UpdateRole :korisnik="this.korisnik" />
                </div>
    </div>
</template>


<script>
import axios from 'axios'

import UpdateUsername from '../updateforms/updateUsername.vue'
import UpdatePassword from '../updateforms/updatePassword.vue'
import UpdateFirstname from '../updateforms/updateFirstname.vue'
import UpdateLastname from '../updateforms/updateLastname.vue'
import UpdateEmail from '../updateforms/updateEmail.vue'
import UpdateAddress from '../updateforms/updateAddress.vue'
import UpdateRole from '../updateforms/updateRole.vue'

    export default {
        name:'OverlayEdit',
        components:{ UpdateUsername,UpdatePassword,UpdateFirstname,UpdateLastname,UpdateEmail,UpdateAddress,UpdateRole},
        props:['korisnik'],
        
        methods:{
            closeWindow(){
                document.querySelector('.overlay-edit').style.display = 'none'
            },

            currentEmit(num){
                this.$emit('num',num)
            },

            currentActive(classname){
                let content = document.querySelectorAll('.contentforchange')
               
                content.forEach(item => {
                    item.classList.remove('active')
            })
                document.querySelector(`.${classname}`).classList.add('active')
            
            },
            
        }
    }
</script>

<style scoped>
.overlay-edit{
        background: rgba(0, 0, 0, 0.780);
        
        display: none;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        width:100%;
        height: 100vh;
        position: fixed;
        top:0%;
        left:0%;
        z-index: 30;
        line-height: 2rem;
    }
    .times{
        width:30%;
        text-align: right;
        margin: 0% auto;
        font-size:30px;
        font-weight:500;
        color:white;
        cursor:pointer;
    }
    .info h3 , .info-red h3{
        color:white;
        text-align: center;
    }
    h1,small{
        color:gray;
     
        display: flex;
        justify-content: center;
    }
    img{
        width:100px;
        height:100px;
        border-radius: 50%;
        margin:auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .form{
       
        width:30%;
        background-color:white;
        box-sizing: border-box;
        padding:10px;
        border-radius:5px;
    }
    @media (max-width:567px) {
        .form{
            width:70%;
        }
    }
    .update-menu{
        width:100%;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap:5px;
        /* justify-content: space-between;
        align-items: center; */
        gap:10px;
        margin-top:3%;
    }
    .btn-menu{
        background:cornflowerblue;
        padding:15px 20px;
        border-radius:50px;
        border:none;
        color:white;
        cursor:pointer;
    }
     .info{
        padding:15px;
        border-radius: 5px;
         background: linear-gradient(to right , rgb(255, 185, 54), rgb(255, 59, 59));

    }
     
    .info-red{
        padding:15px;
        border-radius: 5px;
        background: linear-gradient(to right , rgb(98, 73, 255), rgb(161, 73, 255));
       
    }
</style>