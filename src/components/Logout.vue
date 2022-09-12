<template>
     <button type='button' class="logout-btn" v-on:click="logout"><font-awesome-icon icon="fa-solid fa-right-to-bracket" /> Logout</button>
</template>

<script>
    export default {
        name: 'Logout',
        methods: {
            logout(){
                localStorage.removeItem('user')
                this.$store.state.user = false
                
                this.$router.push('/')
              
            }
        }
    }
</script>

<style>
    .logout-btn{
        background: transparent;
        border:none;
        color:rgb(208, 0, 83);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap:10px;
        font-size:20px;
        cursor: pointer;
    }
</style>
