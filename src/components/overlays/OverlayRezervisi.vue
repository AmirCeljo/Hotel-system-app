<template>
    <div class="overlay-rezervisi">
         <div class="times" v-on:click="closeWindow"><font-awesome-icon icon="fa-solid fa-times"/></div>
     
        <div class="card" v-for="s in soba" v-bind:key="s">
           
            
             <div class='rezervisi-content'>
                        <h2>Prijem gostiju i rezervacija soba</h2>
                        <div class="form">
                        
                       
                            <form action="" @submit="onSubmit">
                                <div class="form-group">
                                    <input type="text" class="form-control" v-model="glavniGost"
                                    placeholder="Unesite ime glavnog gosta" />
                                    
                                   
                                    
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" v-model="gosti"
                                    placeholder="Unesite imena ostalih gostiju npr Enes, Lamija ..." />
                                </div>
                                <div class="form-group input-group">
                                    <input type="date" class='form-control-left' v-model="checkIn"/>
                                    <input type="date" class='form-control-right' v-model="checkOut" />
                                </div>
                               
                                <div class="form-group submit">
                                    <input type="submit"  />
                                </div>
                            </form>
                        </div>
                </div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios'
    export default{
        name:'OverlayRezervisi',
        props:['soba'],
        data(){
            return{
                checkIn: '',
                checkOut: '',
                glavniGost: '',
                gosti: ''
                
            }
        },
        methods:{
           
            closeWindow(){
                document.querySelector('.overlay-rezervisi').style.display = 'none'
            },
            async onSubmit(e){
                e.preventDefault()
                

                const obj = {
                    id:this.soba[0].id,
                    glavniGost: this.glavniGost,
                    gosti: this.gosti,
                    from: this.checkIn,
                    to: this.checkOut
                }

             
                const result = await axios.post('http://localhost:5000/rezervisisobu',obj)

                if(result){
                    this.$router.go()
                }
                
            },
            mounted(){
                
            }
        }
    }
</script>

<style scoped>
.overlay-rezervisi{
    position:fixed;
    top:0;left:0;
    z-index: 20;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100vh;
    background-color:rgba(0, 0, 0, 0.8);
    color:white;
}
h2{
    text-align:center;
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
.card{
       

        width: 30%;
        /* height:60vh; */
        background-color: white;
        color:cornflowerblue;
        border-radius:5px;
        padding:50px 5px;
        line-height: 4rem;
        
    }

 .rezervisi-content {

        width: 100%;
        
        margin: 0% auto;

    }

    .form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    form {
        width: 80%;
        margin-top: 3%;

    }
    .input-group,.form-group,.submit{
        display: flex;
        justify-content: center;
        align-items:center ;
    }
    
    .submit{
        margin-top:5%;
    }
    .submit input{
        width:100%;
        padding:10px 25px;
        background-color:cornflowerblue;
        color:white;
        
        border:none;
        border-radius:50px;
    }
    .form-control{
        width:100%;
        border:1px solid cornflowerblue;
        padding:10px;
        margin-bottom:3%;
        border-radius:5px;
    }
    .form-control-left,
    .form-control-right {
        padding: 10px 35px;
        cursor: pointer;
    }

    .form-control-left:focus {
        outline: none;
        border-top: 1px solid orangered;
        border-left: 1px solid orangered;
        border-bottom: 1px solid orangered;
    }

    .form-control-right:focus {
        outline: none;
        border-top: 1px solid orangered;
        border-right: 1px solid orangered;
        border-bottom: 1px solid orangered;

    }

    .form-control-left {
        border-top: 1px solid cornflowerblue;
        border-left: 1px solid cornflowerblue;
        border-bottom: 1px solid cornflowerblue;
        border-right: none;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
    }

    .form-control-right {

        border-top: 1px solid cornflowerblue;
        border-left: 1px solid gray;
        border-bottom: 1px solid cornflowerblue;
        border-right: 1px solid cornflowerblue;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
    }
    @media (max-width:567px) {
        .card{
            width:70%;
        }
    }
</style>