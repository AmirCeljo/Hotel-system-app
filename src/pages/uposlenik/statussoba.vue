<template>
    <div class='status-container'>
        <SideNav />

        <div class="status-content">
            <h1> Status svih soba u hotelu</h1>
            <div class="status-content-background">
                <div class="status-content-soba" v-for="sobe in svesobe" v-bind:key="sobe">
                    <div class="soba" v-for="soba in sobe" v-bind:key="soba">
                        <h1>Soba {{soba.id}}</h1>
                        <p>{{soba.sektor}}</p>
                        <p>{{soba.opis}}</p>

                        
                    </div>
                </div>
            </div>
 
        </div>
       
       
    </div>
</template>


<script>
import axios from 'axios'
import SideNav from '../../components/SideNav.vue'

    export default{
        name:'StatusSoba',
        components: {SideNav},
        data(){
            return{
                svesobe: [],
                
            }
        },
        
        mounted(){
            const sobe = async ()=> {
                const result = await axios.get('https://hotel-menagment-app-vue-app.herokuapp.com/svesobe')
               
                if(this.svesobe.length > 0){
                    this.svesobe.splice(0,this.sobe.length)
                    this.svesobe.push(result.data)
                }
                else{
                    this.svesobe.push(result.data)
                }

            }
            sobe()

             if(this.$store.state.user.role == 'admin'){
                this.$router.push(`/${this.$store.state.user.role}`)
            }

            this.$store.state.sidenav = true;

        }
    }
</script>


<style scoped>
.status-container{
    display:flex;
    width:100%;
    height:90vh;
}
.status-content{
    width: 70%;
    margin: 5% auto;   
}
.status-content-background{
    background-color: cornflowerblue;
        padding: 15px;
        width: 100%;
        margin: 5% auto;
        border-radius: 5px;
}
.status-content-soba{
    display: grid;
    grid-template-columns: repeat(5,1fr);
        

    gap: 15px;
}
.soba{
    
    background-color:tomato;
    padding:10px;
    border-radius: 5px;
    color:white;
}
.soba small{
    display: block;
    text-align: center;
    color:rgb(0, 239, 0);
}
.soba h1{
    margin-bottom:5%;
}
.soba p {
    margin-top:5%;
}

@media (max-width:567px) {
    .status-content{
    width: 90%;
    margin: 5% auto;   
}
.status-content-background{
    background-color: cornflowerblue;
        padding: 15px;
        width: 100%;
        margin: 5% auto;
        border-radius: 5px;
}
.status-content-soba{
    display: grid;
    grid-template-columns: repeat(2,1fr);
        

    gap: 15px;
}
}
</style>