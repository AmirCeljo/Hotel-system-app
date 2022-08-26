<template>
    <ul>
        <li><router-link to="/admin"><font-awesome-icon icon="fa-solid fa-user" />Profil</router-link></li>
            <li><router-link to="/uposlenik/statussoba"><font-awesome-icon icon="fa-solid fa-calendar" /> Sobe na raspolaganju</router-link></li>

            <li><router-link to="/uposlenik/rezervisisobu"><font-awesome-icon icon="fa-solid fa-calendar" /> Rezervisi Sobu</router-link></li>
            <li> <Logout/> </li>
    </ul>
</template>

<script>
 import Logout from '../Logout.vue'
 export default{
    name: 'UposlenikUl',
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
        gap:10px;
        font-size:20px;
    }
</style>