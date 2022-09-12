<template>
    
        
        <div class="sadrzaj">
       
        <div class="uposlenici">
             <h1>{{sektor}}</h1>
            <h3>Uposlenici na sektoru</h3>
            <div class="uposlenici-items" v-for="sadrzaj in sektorSadrzaj " v-bind:key='sadrzaj'>
                <div v-for="uposlenik in sadrzaj" v-bind:key="uposlenik">
                    <div class="card">
                        <div v-if="uposlenik.gender == 'female' " class='image'>
                            <img src="../../zenskiavatar.jpg"
                                alt="">
                        </div>
                        <div v-if="uposlenik.gender == 'male' " class="image">
                            <img src="../../muskiavatar.jpg"
                                alt="">
                        </div>


                        <h3>{{uposlenik.firstname}} {{uposlenik.lastname}}</h3>
                        <small>{{uposlenik.availabilityStatus}}</small>
                        <form @submit="(e) => {
                            e.preventDefault()

                            onSubmitKorisnik(uposlenik)
                            }">
                            <input type="submit" value="Remove" class="remove">
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="sobe">
            <h3>Sobe na sektoru</h3>
            <div class="sobe-items" v-for="sadrzaj in sobeSadrzaj " v-bind:key='sadrzaj'>
                <div v-for="soba in sadrzaj" v-bind:key="soba">
                    <div class="card-soba">
                        <p>{{soba.rednibroj}}</p>
                        <h3>{{soba.opis}}</h3>
                        
                        <form @submit="(e) => {
                            e.preventDefault()

                            onSubmitSoba(soba)
                            }" >
                            <input type="submit" value="Remove" class="remove">
                        </form>
                    </div>
                </div>

            </div>

        </div>
        </div>
     
</template>

<script>
    import {
        useRoute
    } from 'vue-router'
    import axios from 'axios'
    import SideNav from '../../components/SideNav.vue'
    export default {
        name: 'SektorSadrzaj',
        components: {
            SideNav
        },
        data() {
            return {
                sektorSadrzaj: [],
                sobeSadrzaj: [],
                sektor: '',
               
            }
        },
        methods:{
            
            async onSubmitKorisnik(uposlenik){
                
                const result = await axios.post('https://hotel-menagment-app-vue-app.herokuapp.com/uklonikorisnikaizsektora', uposlenik)
                
                this.$router.go()
            },
            async onSubmitSoba(soba){
                const result = await axios.post('https://hotel-menagment-app-vue-app.herokuapp.com/uklonisobuizsektora', soba)
                
                this.$router.go()

            }
        },
        mounted() {
            const route = useRoute()
            const id = route.params.id
            this.sektor = 'Sektor ' + id
            const fetchSektor = async () => {
                const result = await axios.get(`https://hotel-menagment-app-vue-app.herokuapp.com/sektor/${id}`)

                if (this.sektorSadrzaj.length > 0) {
                    this.sektorSadrzaj.splice(0, this.sektorSadrzaj.length)
                    this.sektorSadrzaj.push(result.data[0])
                } else {
                    this.sektorSadrzaj.push(result.data[0])
                }

                 if (this.sobeSadrzaj.length > 0) {
                    this.sektorSadrzaj.splice(0, this.sobeSadrzaj.length)
                    this.sobeSadrzaj.push(result.data[1])
                } else {
                    this.sobeSadrzaj.push(result.data[1])
                }
               
            }
            fetchSektor()

            if(this.$store.state.user.role != 'sef'){
                
                this.$router.push(`/${this.$store.state.user.role}`)
                
            }
     
            this.$store.state.sidenav = false;
     

            
        }
    }
</script>

<style scoped>
   
   
    .uposlenici h1 {
        text-align: center;
        margin-bottom: 5%;
        color: cornflowerblue;
    }
    .sadrzaj{
        width:70%;
        height:90vh;
        margin:auto;
        padding-right: 40px;
    overflow:hidden;
    overflow-y: auto ;
        /* transform: translate(-10%,0%); */
    }
    .uposlenici,.sobe{
        padding: 10px;
        margin-bottom: 5%;
    }

    h3 {
        text-align: center;
        color: gainsboro;
    }

    .uposlenici-items {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        width: 100%;
        max-height: 54vh;
        margin: auto;
        margin-top: 2%;
        padding: 15px;
        overflow: hidden;
        overflow-y: auto;
        box-sizing: border-box;
        background: rgb(241, 241, 241);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
.sobe-items {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        width: 100%;
       max-height: 54vh;
        margin: auto;
        margin-top: 2%;
        padding: 15px;
        overflow: hidden;
        overflow-y: auto;
        box-sizing: border-box;
        background: rgb(241, 241, 241);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .card {
        height: 250px;
        background-color: cornflowerblue;
        border-radius: 5px;
        padding: 5px;

    }
    
    .card img {
        width: 80px;
        height: 80px;
        display: flex;
        margin: auto;
    }

    .card h3 {
        color: white;
        text-align: center;
        margin-top: 2%;
    }

    .card small {
        font-size: 17px;
        text-align: center;
        display: block;
        margin-top: 10%;
        color: rgb(0, 239, 0);
        text-transform: capitalize;
    }
    .card-soba{
        
        background-color: cornflowerblue;
        border-radius: 5px;
        padding: 15px;
    }
    .card-soba p {
        color:white;
        text-align: center;
    }
    .card-soba h3{
         color: white;
        text-align: center;
        margin-top: 2%;
        text-transform: capitalize;
    }

    form {
        width: 90%;
        margin: auto;
        margin-top: 10%;
    }

    form input {
        width: 100%;
        background-color: tomato;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 50px;
    }
    @media (max-width:567px) {
        .uposlenici-items{
            grid-template-columns: repeat(2,1fr);
        }
        .sobe-items{
            grid-template-columns:repeat(2,1fr) ;
        }
        .sadrzaj{
            width:90%;
        }
    }
</style>