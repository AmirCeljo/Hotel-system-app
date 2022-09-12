<template>
    <div class="korisnik-card">
       
        <div v-if="up.gender == 'female' " class='image'>
            <img src="../../zenskiavatar.jpg" alt="">
        </div>
        <div v-if="up.gender == 'male' " class="image">
            <img src="../../muskiavatar.jpg" alt="">
        </div>

      
        <h3>{{up.firstname}} {{up.lastname}}</h3>
        <small v-if="up.availability == 'busy' " class='red'>Busy</small>
        <small v-if="up.availability == 'available' " class='green'>Available</small>
        <small class="sektor">{{sektor}}</small>

        <form action="" @submit="(e) => {
            e.preventDefault();
            onSubmit(up.id,up.firstname, up.lastname,sektor,this.sektorid,this.sefId)
            }">
            <input type="submit" />
            <button type="button">Poruka</button>
        </form>
    </div>
</template>



<script>
import axios from 'axios'
    export default {
        name: 'KorisnikZaSobu',
        props: ['up','sektor','sektorid','sefId'],
        
        methods:{
            async onSubmit(userId,firstname,lastname,sektor,sektorId,sefId){
               
                const korisnik = {
                    userId:userId,
                    firstname: firstname,
                    lastname: lastname,
                    sektor:sektor,
                    sektorId:sektorId,
                    sefId:sefId,
                    
                }
                const result = await axios.post('http://localhost:5000/dodajuposlenikanasektor', korisnik)
                console.log(result)
                this.$router.go()
            }
        }
    }
</script>



<style scoped>
    .korisnik-card {
        height: 250px;
        background-color: cornflowerblue;
        border-radius: 5px;
    }

    img {
        width: 70px;
        height: 70px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h3{
        color:white;
        text-align: center;
    }
    .red{
color:red;
        text-align: center;
        display: block;
        font-size:15px;
        text-transform: capitalize;
    }
    .green{
        color:rgb(0, 239, 0);
        text-align: center;
        display: block;
        font-size:15px;
        text-transform: capitalize;
    }
    .sektor{
        color:rgb(0, 239, 0);
        text-align: center;
        display: block;
        font-size:15px;
        text-transform: capitalize;
    }
    form{
        width:90%;
        padding-top:10%;
        margin:auto;
        display: flex;
        justify-content: center;
        align-items:center;
        gap:5px;
    }
    input{
        padding:10px 15px;
        border:none;
        border-radius:50px;
        width:90%;
        cursor:pointer;
        background-color:white;
        color: cornflowerblue;
    }
    button{
        padding:10px 15px;
        border:none;
        border-radius:50px;
        width:90%;
        cursor:pointer;
        background-color:gold;
        color: white;
    }
</style>