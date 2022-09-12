<template>
    <div class="overlay-sobe">
            <div class="times" v-on:click="closeWindow"><font-awesome-icon icon="fa-solid fa-times"/></div>
            
            <div class="forma-za-sobu">
                <h1>Dodaj sobu</h1>
                <h3>{{this.trenutnisektor}}</h3>
                
                <form action="" @submit="(e) => {
                    e.preventDefault() 
                    onSubmit(this.trenutnisektor,this.trenutniId,this.duzina)
                    }">
                    
                    <div class="form-group">
                        <input type="number" class="number-input" 
                        v-model='soba' placeholder="npr Dvokrevetna soba , unesite (2)">
                    </div>
                     <div class="form-group">
                        <textarea cols="30" rows="5"  v-model="desc" placeholder="Unesite opis"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="submit">
                    </div>
                </form>
            </div>

            
    </div>  
</template>

<script>    
import axios from 'axios'
 
  export default{ 
   
    name:'OverlaySobe',
    components:{},
    props: ['uposlenici','trenutnisektor','trenutniId','duzina'],
    data(){
      return{
    
        soba:'',
        desc:''
      }      
    }
    ,
    methods:{
      closeWindow(){
        document.querySelector('.overlay-sobe').style.display = 'none'
      },
      async onSubmit(sektor,sektorId,duzina){
        
        const obj = {
            soba: this.soba,
            opis:this.desc,
            rednibroj:duzina,
            sektor:sektor,
            sektorId:sektorId
        }
        const result = await axios.post('http://localhost:5000/dodajsobunasektor',obj)
        console.log(result.data)

        this.soba = ''
        this.desc = ''
        this.$router.go()
      }
    }
  }
</script>

<style scoped>
.overlay-sobe{
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
  
    .times{
       width:20%;
        text-align: right;
        margin: 0% auto;
        font-size:30px;
        font-weight:500;
        color:white;
        cursor:pointer;
    }
    .forma-za-sobu{
        width:20%;
        padding:30px 20px;
        background: white;
        border-radius: 5px;
    }
    .forma-za-sobu h1{
        color:cornflowerblue;
    }
    .forma-za-sobu h3{
        color:rgb(0, 239, 0);
    }
    .forma-za-sobu h1,
    .forma-za-sobu h3{
        text-align: center;
        line-height: 2rem;
        margin-bottom:5%;
    }
    form{
        width:95%;
        margin:auto;
        margin-top:5%;
        line-height: 3rem;
    }
    .number-input{
        width:100%;
        height:30px;
        border:none;
        border-bottom:2px solid cornflowerblue;
    }
    textarea{
         width:100%;
        
        border:none;
        border-bottom:2px solid cornflowerblue;
    }
    textarea:focus{
        outline:none;
        border-bottom:2px solid black;
    }
    .number-input:focus{
        outline:none;
        border-bottom:2px solid black;
    }
    .submit{
        width:100%;
      
        border:none;
        border-radius: 50px;
        background-color: cornflowerblue;
        color:white;
        padding:10px 15px;
        cursor:pointer;
    }
    @media (max-width:567px) {
        .forma-za-sobu{
            width:70%;
        }
    }
</style>