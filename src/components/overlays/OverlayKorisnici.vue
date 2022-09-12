<template>
    <div class="overlay-korisnici">
            <div class="times" v-on:click="closeWindow"><font-awesome-icon icon="fa-solid fa-times"/></div>
            
            <div class="lista-korisnika" v-for="uposlenik in uposlenici" v-bind:key="uposlenik">
              <div v-for="up in uposlenik" v-bind:key="up">
              <KorisnikZaSobu :up="up" :sektor="this.trenutnisektor" :sektorid="this.trenutniId" :sefId="this.trenutniSef" />
              </div>
            </div>


    </div>  
</template>

<script>    

  import KorisnikZaSobu from '../sefusers/KorisnikZaSobu.vue'
  export default{ 
   
    name:'OverlayKorisnici',
    components:{KorisnikZaSobu},
    props: ['uposlenici','trenutnisektor','trenutniId','trenutniSef'],
    
    methods:{
      closeWindow(){
        document.querySelector('.overlay-korisnici').style.display = 'none'
      }
    },
    
  }
</script>

<style scoped>
.overlay-korisnici{
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
    .lista-korisnika{
      width:60%;
      max-height:72vh;
      overflow-y:scroll;
      background-color:white;
      padding:15px;
      border-radius: 5px;
      display: grid;
      grid-template-columns: repeat(4,1fr) ;
      gap:15px;
    }
    .times{
        width:60%;
        text-align: right;
        margin: 0% auto;
        font-size:30px;
        font-weight:500;
        color:white;
        cursor:pointer;
    }
    @media (max-width:567px) {
        .lista-korisnika{
            width:90%;
            grid-template-columns: repeat(2,1fr) ;
        }
        
    }
</style>