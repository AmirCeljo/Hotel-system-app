<template>
     <div class="contentforchange contentforchangerole">
        <form @submit="onSubmit">
                    <div class="ellipsis">
                    <font-awesome-icon icon="fa-solid fa-ellipsis" />
                   </div>
                    <div class="form-group">
                       
                        <h1>Promijeni Ulogu</h1>
                         <div v-for="k in korisnik" v-bind:key="k"> 
                        <h3>{{k.role}}</h3>
                        </div>
                        <label for=""></label>
                        <div class="group">
                            <input type="text" placeholder="Promijeni ulogu" v-model="role" class="form-control">
                            <input type="submit" class="btn-submit">
                        </div>
                    </div>
            </form>
                    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name:'UpdateRole',
        props:['korisnik'],
        data(){
            return{
                
                role:''
            }
        },
        methods:{
            async onSubmit(e){
                e.preventDefault();

                const korisnik = {
                    id:this.$store.state.user._id,
                    role: this.role
                }
                const result = await axios.post('http://localhost:5000/updaterole', korisnik)
                console.log(result)
            }

        }
    }
</script>

<style scoped>
.form-group{
        width: 100%;
        background-color: gainsboro;
        border-radius: 5px;
        padding:15px;
        margin-top:5%;
        color:gray;
    }
    h3{
        text-align: center;
        
        color:rgb(226, 0, 75);
        
        margin-bottom:4%;
    }
    .form-group h1{
        text-align:center;
        margin-bottom:10px;
    }
    .group{
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:5px;
    }
    .group .form-control{
        width:80%;
        height:40px;
        padding-left:10px;
        border:none;
        background-color:white;
        /* border-top-left-radius:5px ;
        border-bottom-left-radius:5px ; */
        border:1px solid cornflowerblue;
        border-radius: 50px;
    }
    .group .btn-submit{
        width:80%;
        height:40px;
        background: cornflowerblue;
        color:white;
        border:none;
         border-top-right-radius:5px ;
        border-bottom-right-radius:5px ;
        border-radius: 50px;

    }
    .ellipsis{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:40px;
        color:gray;
    }
   
    .contentforchange{
        display:none;
    }
    .active{
        display:block;
    }
</style>