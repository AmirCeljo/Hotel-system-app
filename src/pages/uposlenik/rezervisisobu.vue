<template>

     
        <div class='rezervisi-content'>
            <div class="form">
                <form action="" @submit="(e) => {
                    e.preventDefault()
                    onSubmit()
                    }">
                    <!-- <div class="form-group">
                        <input type="search" />
                    </div> -->
                    <div class="form-group">
                        <input type="date" v-model="checkIn" class="form-control-left" />
                    </div>
                    <div class="form-group">
                        <input type="date" v-model="checkOut" class="form-control-right" />
                    </div>
                    <div class="form-group submit-group">
                        <input type="submit" class='submit' />
                    </div>
                </form>

            </div>
          
            <div class="sobe-background">
                <div v-if="slobodnesobe.length == 0">
                    <h1>Pretrazite slobodne sobe za odredjeni period</h1>
                </div>
                <div v-else>
                    <div class="sobe" v-for="x in slobodnesobe" v-bind:key="x">
                        <div class="sobe-card" v-for="y in x" v-bind:key="y">
                            <p>{{y.sektor}}</p>
                            <p>Soba {{y.rednibroj}}</p>

                            <div>
                                <small class="green">slobodna za period</small>
                                <small class="green">{{checkIn}} </small>
                                <small class="green">{{checkOut}}</small>
                            </div>

                            <div class="button-group">
                               <button type="button" class="reserve"
                               v-on:click="() => {
                                currentRoom(y)
                               }"
                               >Rezervisi</button>                                
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        
           <OverlayRezervisi :soba="this.soba" />
        </div>
        
 
</template>

<script>
    import axios from 'axios'

    import SideNav from '../../components/SideNav.vue'
import OverlayRezervisi from "../../components/overlays/OverlayRezervisi.vue"

    export default {
        name: 'RezervisiSobu',
        components: {
            SideNav,
            OverlayRezervisi
        },
        data() {
            return {
                checkIn: '',
                checkOut: '',
                slobodnesobe: [],
                soba:[]
            }
        },
        methods: {
            currentRoom(room){
                document.querySelector('.overlay-rezervisi').style.display = 'flex'
              
                if(this.soba.length > 0){
                    this.soba.splice(0,this.soba.length)
                    this.soba.push(room)
                }
                else{
                    this.soba.push(room)
                }
            },
            async onSubmit() {

                const obj = {
                    from: this.checkIn,
                    to: this.checkOut
                }


                const result = await axios.post('https://hotel-menagment-app-vue-app.herokuapp.com/slobodnesobe', obj)
                
                if (this.slobodnesobe.length > 0) {
                    this.slobodnesobe.splice(0, this.slobodnesobe.length)

                    this.slobodnesobe.push(result.data)
                } else {
                    this.slobodnesobe.push(result.data)
                }

            }
        },
        mounted() {
            

            if(this.$store.state.user.role == 'admin'){
                this.$router.push(`/${this.$store.state.user.role}`)
            }

    
            this.$store.state.sidenav = false;
    


        }
    }
</script>

<style scoped>
    
   
    .rezervisi-content {

        width: 70%;
        
        margin: 0% auto;
        
    }

    .form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    form {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3%;

    }

    .submit-group {
        padding-left: 3%;
    }

    .submit {
        padding: 15px 20px;
        background: cornflowerblue;
        border: 1px solid cornflowerblue;
        border-radius: 50px;
        color: white;
        cursor: pointer;
    }

    .form-control-left,
    .form-control-right {
        padding: 15px 45px;
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

    .sobe-background {
        background-color: cornflowerblue;
        padding: 15px;
        width: 100%;
        margin: 5% auto;
        border-radius: 5px;
    }

    .sobe-background h1 {
        color: white;
        text-align: center;
    }

    .sobe {

        gap: 15px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);

    }

    .sobe-card {
        background-color: tomato;
        border-radius: 5px;
        padding: 15px 5px;
    }

    .sobe-card h1 {
        color: white;
        text-align: center;
    }

    p {
        font-size: 16px;
        font-weight: 600;
        color: white;
        text-align: center;
    }

    .green {
        text-align: center;
        display: block;
        color: rgb(0, 239, 123);
    }
    .red{
        text-align: center;
        display: block;
        color: white;
    }
    .button-group{
        display:flex;
        justify-content: center;
        align-items:center;
        margin-top:5%;
    }
    .reserve{
        background-color: white;
        border:none;
        color:cornflowerblue;
        padding:10px 15px;
        border-radius: 50px;
        width:90%;
    }
    @media (max-width:567px) {
          .form {
            width: 80%;
            margin:auto;
            margin-top:3%;
            }
            form{
                margin:auto;
            }
            .rezervisi-content{
                width:90%;
                
            }
            .form-control-left,
    .form-control-right {
        padding: 15px 30px;
        cursor: pointer;
    }
    .submit {
        padding: 15px 18px;
        
    }
    .sobe{
        grid-template-columns: repeat(2,1fr);
    }
    }
</style>