<template>
    <div class="side-nav">
        <div>
            
            <div v-if="this.$store.state.user.role == 'admin'">
            <AdminUl />
        </div>

       <div v-if="this.$store.state.user.role == 'sef'">
            <SefUl />
        </div>

        <div v-if="this.$store.state.user.role === 'uposlenik'">
            <UposlenikUl />
        </div> 

        </div>
    </div>    
   
</template>

<script>
    import AdminUl from './sidenav_liste/AdminUl.vue'
    import SefUl from './sidenav_liste/SefUl.vue'
    import UposlenikUl from './sidenav_liste/UposlenikUl.vue'
    export default {
        name:'SideNav',
        components:{ AdminUl,SefUl,UposlenikUl }
    }
</script>

<style scoped>
.side-nav{
        width:20%;
        height:100%;
        /* background-color:rgba(220, 220, 220, 0.907); */
        background: url('../../public/google-pattern-3.jpg') no-repeat center center/cover;
        display:none;
        
        transition: .5s;
        overflow: hidden;
      
    }
   
    @media (max-width:567px) {
        .side-nav{
            position:fixed;
            z-index: 0;
            top:0;
            width:50%;
        }
    }
</style>

