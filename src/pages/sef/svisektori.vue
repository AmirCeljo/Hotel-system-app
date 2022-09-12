<template>
    <div class="sektori">
        
        
        <div class="svi-sektori" v-for="sektori in svisektori" v-bind:key="sektori" >
            <div v-for="sektor in sektori" v-bind:key="sektor">
                 <div class="sektor-card">
                    <a class="btn-route" v-on:click="() => {
                        setParamsId(sektor.id)
                        }">{{sektor.sectorName}}</a>
                    <small>Zaduzen za sektor</small>
                    <div class="chip"> 
                    <a class="name">
                        {{sektor.sefFirstname}} {{sektor.sefLastname}}</a>
                    </div>
                    
                    <div class="counts">
                        <button type="button" class="sektor-btn-one" v-on:click="()=>{
                            overlayRadnici(sektor.sectorName,sektor.id,sektor.sefId)
                            }">Dodaj Radnika</button>
                        <button type="button" class="sektor-btn-two" v-on:click="()=>{
                            overlaySobe(sektor.sectorName,sektor.id)
                            }">Dodaj Sobu</button>
                    </div>
                </div>
        
           
        </div>
        <OverlayKorisnici :uposlenici="this.uposlenici" :trenutnisektor='this.trenutniSektor'
        :trenutniId="this.sektorId" :trenutniSef="this.trenutniSef"/>
        <OverlaySobe :trenutnisektor='this.trenutniSektor' :trenutniId="this.sektorId" :duzina="duzinaSoba"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SideNav from '../../components/SideNav'
import OverlayKorisnici from '../../components/overlays/OverlayKorisnici.vue'
import OverlaySobe from '../../components/overlays/OverlaySobe.vue'
import {useRoute} from 'vue-router'

    export default{

        name:'SviSektori',
        components: {SideNav,OverlayKorisnici,OverlaySobe},
        data(){
            return{
                svisektori: [],
                uposlenici: [],
                trenutniSektor: '',
                sektorId: '',
                trenutniSef: '',
                duzinaSoba: 0,

            }
        },
        methods:{
            overlayRadnici(trenutniNaziv,idSektora, idSefaSektora){
                document.querySelector('.overlay-korisnici').style.display = 'flex'
                this.trenutniSektor = trenutniNaziv
                this.sektorId = idSektora
                this.trenutniSef= idSefaSektora
            },
            overlaySobe(trenutni,idSektora){
                document.querySelector('.overlay-sobe').style.display = 'flex'
                this.trenutniSektor = trenutni
                this.sektorId = idSektora

                axios.get(`https://hotel-menagment-app-vue-app.herokuapp.com/sektor/${idSektora}`)
                .then(result => {
                    // this.duzinaSoba.push(result.data[1])
                    // this.duzinaSoba.push(result.data[1])
                    this.duzinaSoba = result.data[1].length + 1
                    console.log(this.duzinaSoba)

                })
                .catch(err => console.log(err))

                
            }
            ,
            async setParamsId(id){
                const result = await axios.get(`https://hotel-menagment-app-vue-app.herokuapp.com/sektor/${id}`)
                
                this.$router.push('/sektor/' + id)
            }
           
        },
        
        mounted(){
           const fetchUsers = async () => {
                const result = await axios.get('https://hotel-menagment-app-vue-app.herokuapp.com/svisektori');
                this.svisektori.push(result.data)
               
            }
            fetchUsers()
            const fetchUposlenike = async () => {
        const result = await axios.get('https://hotel-menagment-app-vue-app.herokuapp.com/sviuposlenici')
        this.uposlenici.push(result.data)
       
      }
      

      fetchUposlenike()

      if(this.$store.state.user.role != 'sef'){
                
                this.$router.push(`/${this.$store.state.user.role}`)
                
            }
   
     
            this.$store.state.sidenav = false;
     

    
   }

        
    }
</script>

<style scoped>
    .sektori{
        width:70%;
        margin:auto;
        margin-top:5%;
        display: flex;
        justify-content: center;
        align-items: center;
         box-sizing: border-box;
        /* transform: translate(-8%,0%); */
    }
    .svi-sektori{
        padding:15px;
        background-color:cornflowerblue;
        border-radius:5px;
        display: grid;
        box-sizing: border-box;
        grid-template-columns: repeat(4,1fr);

        gap:15px;
    }
    .sektor-card{
        
        /* height:250px; */
        background-color: white;
        border-radius:5px;
        padding:10px;
        margin:0;
    }
    .sektor-card .btn-route{
        text-align:center;
        color:cornflowerblue;
        text-decoration:underline;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:auto;
        font-size: 25px ;
        background: transparent;
        border:none;
        cursor:pointer;
    }
    .sektor-card small{
        display:block;
        color:gray;
        text-align: center;
        margin-top:3%;
    }
    .chip{
        margin-top:5%;
       display:flex;
       justify-content: center;
       align-items: center;
    }
    .sektor-card .name{
        
        color:gray;
       
        padding:3px 10px;
        border-radius: 50px;
        background-color: rgb(233, 233, 233);
        
    }
    .sektor-card a img{
       
        transform: translate(-30%,23%);
width:11%;
        height: 100%;
        /* background: url('https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png') no-repeat center-center/cover; */
      
    }
    .counts{
        display:flex;
        justify-content:center;
        align-items: center;
        gap:5px;
        margin-top:5%;
        
    }
    .counts div{
        width:50%;
        /* height:50px; */
        background-color: rgb(233, 233, 233);
        border-radius:5px;
        /* padding:3px; */
    }
    .sektor-btn-one,.sektor-btn-two{
        color:white;
        border:none;
        border-radius: 50px;
        padding:10px 15px;
        cursor:pointer;
    }
    .sektor-btn-one{
        background-color: gold;

     }
    .sektor-btn-two{
        background-color: cornflowerblue;
       
    }
    .sektor-btn-one:hover{
        opacity: .8;
        transition: .1s ease-in;
    }

    @media (max-width:567px) {
        .svi-sektori{
        width: 90%;
        grid-template-columns: repeat(2,1fr);

    }
    }
</style>