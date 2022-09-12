<template>
    <div class="side-nav" v-if="this.$store.state.user">
        <div>

            <div v-if="this.$store.state.user.role == 'admin'">
                <ul>
                    <li>
                        <router-link to="/admin">
                            <font-awesome-icon icon="fa-solid fa-user" />Profil</router-link>
                    </li>
                    <li>
                        <router-link to="/admin/adduser">
                            <font-awesome-icon icon="fa-solid fa-user" /> Dodaj novog korisnika</router-link>
                    </li>
                    <li>
                        <router-link to="/admin/svikorisnici">
                            <font-awesome-icon icon="fa-solid fa-list" /> Upravljanje Korisnicima</router-link>
                    </li>
                    <li>
                        <Logout />
                    </li>
                </ul>
            </div>

            <div v-if="this.$store.state.user.role == 'sef'">
                <ul>
                    <li>
                        <router-link to="/sef">
                            <font-awesome-icon icon="fa-solid fa-user" />Profil</router-link>
                    </li>
                    <li>
                        <router-link to="/sef/svisektori">
                            <font-awesome-icon icon="fa-solid fa-list" />Svi Sektori</router-link>
                    </li>
                    <li>
                        <router-link to="/uposlenik/rezervisisobu">
                            <font-awesome-icon icon="fa-solid fa-calendar" />Rezervacija Soba </router-link>
                    </li>
                    <li>
                        <router-link to="/uposlenik/statussoba">
                            <font-awesome-icon icon="fa-solid fa-calendar-alt" />Status Soba </router-link>
                    </li>
                    <li>
                        <router-link to="/sef/dodajsektor">
                            <font-awesome-icon icon="fa-solid fa-plus" /> Dodaj Sektor</router-link>
                    </li>


                    <li>
                        <Logout />
                    </li>
                </ul>
            </div>

            <div v-if="this.$store.state.user.role === 'uposlenik'">
                <ul>
                    <li>
                        <router-link to="/admin">
                            <font-awesome-icon icon="fa-solid fa-user" />Profil</router-link>
                    </li>
                    <li>
                        <router-link to="/uposlenik/statussoba">
                            <font-awesome-icon icon="fa-solid fa-calendar" /> Sobe na raspolaganju</router-link>
                    </li>

                    <li>
                        <router-link to="/uposlenik/rezervisisobu">
                            <font-awesome-icon icon="fa-solid fa-calendar" /> Rezervisi Sobu</router-link>
                    </li>
                    <li>
                        <Logout />
                    </li>
                </ul>
            </div>

        </div>
    </div>

</template>

<script>
    import Logout from '../components/Logout.vue'
    export default {
        name: 'SideNav',
        components: {
            Logout
        }
    }
</script>

<style scoped>
    .side-nav {
        width: 18%;
        height: 90vh;
        /* background-color:orangered; */
       
        background: url('../../public/google-pattern-3.jpg') no-repeat center center/cover;
        
        
       
    }
     
    ul {

        padding-top: 5%;
    }

    ul li {
        margin-bottom: 20px;
        margin-left: 5%;


        cursor: pointer;
    }

    a {
        color: rgb(208, 0, 83);
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 20px;
    }
  
    @media (max-width:567px) {
        .side-nav {
            padding-top:3%;
            position: fixed;
            height:100vh;
            z-index: 20;
            top: 0;
            width: 50%;
        transform: translate(-100%,0%);
           
        }
    }
</style>