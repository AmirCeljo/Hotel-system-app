<template>
    <ul>
        <li><router-link to="/sef"><font-awesome-icon icon="fa-solid fa-user" />Profil</router-link></li>
            <li><router-link to="/sef/svisektori"><font-awesome-icon icon="fa-solid fa-list" />Svi Sektori</router-link></li>

            <li><router-link to="/sef/dodajsektor"><font-awesome-icon icon="fa-solid fa-plus" /> Dodaj Sektor</router-link></li>
            
            <li> <Logout/> </li>
        </ul>
</template>

<script>
 import Logout from '../Logout.vue'
 export default{
    name: 'SefUl',
    components:{Logout},
 }
</script>

<style scoped>
 ul{
      
        padding-top:5%;
    }
    ul li {
        margin-bottom:20px;
        margin-left:5%;
    
        
        
        cursor:pointer;
    }
    a{
        color:rgb(208, 0, 83);
         display: flex;
        align-items: center;
        
        align-items: center;
        gap:10px;
        font-size:20px;

    }
</style>