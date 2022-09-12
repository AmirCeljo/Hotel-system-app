<template>
    <div class="card">
        <div>
            <p>{{user.id}}</p>
        </div>
        <div>
            <p>{{user.firstname}} {{user.lastname}}</p>
        </div>
        <div>
            <p>{{user.email}}</p>
        </div>
        <div>
            <p>{{user.address}}</p>
        </div>
        <div class="capitalize">
            <p>{{user.role}}</p>
        </div>
        <div class="capitalize">
            <p v-if="user.status == 'active'" class="blue">{{user.status}}</p>
            <p v-if="user.status == 'deactivated'" class="orange">{{user.status}}</p>
        </div>
        <div>
            <ul>
                <li><button type="button" class="btn-primary" v-on:click="() => {
                        openWindow('overlay-edit')
                        currentUser(user)
                    }">
                        <font-awesome-icon icon="fa-solid fa-pencil" /></button></li>
                <li><button type="button" value="delete" class="btn-danger" v-on:click="() => {
                        
                        openWindow('overlay-delete')
                        currentUser(user)
                    }">
                        <font-awesome-icon icon="fa-solid fa-trash-alt" /></button></li>
                <li><button type="button" value="deactivate" class="btn-warning" v-on:click="() => {
                        
                        openWindow('overlay')
                        currentUser(user)
                        }">
                        <font-awesome-icon icon="fa-solid fa-ban" /></button>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'UserCard',
        props: ['user'],

        methods: {
            openWindow(overlay) {
                let prozor = document.querySelector(`.${overlay}`)
                prozor.style.display = 'flex'
            },

            currentUser(user) {
                this.$emit('current-user', user)

            }
        }
    }
</script>

<style scoped>
    .card {

        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        padding: 10px 0px;

    }

    .card>div {
        width: 200px;
        

    }
    
    p {
        word-break: break-all;
        font-weight: 600;

    }

    ul {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 20px;
    }

    .btn-primary,
    .btn-danger,
    .btn-warning {
        color: white;
        font-weight: 500;
        border: none;
        /* padding: 10px; */
        font-size: 17px;
        cursor: pointer;
        background: transparent;
    }

    .btn-primary {
        color: cornflowerblue;
    }

    .btn-danger {
        color: red;
    }

    .btn-warning {
        color: gold;

    }

    .capitalize {
        text-transform: capitalize;
    }
    .blue{
        color: cornflowerblue;
    }
    .orange{
        color:orangered;
    }
    @media (max-width:567px) {
        .card{
            flex-direction: column;
            height:45vh;
            padding:20px;
            margin-bottom:5%;
            background-color:white;
            border-radius:5px;
            
        }
        .card > div{
            width:100%;
        }.btn-primary,
    .btn-danger,
    .btn-warning {
        color: white;
        font-weight: 500;
        border: none;
        border-radius: 3px;
        padding: 10px;
        font-size: 17px;
        cursor: pointer;
        
    }

    .btn-primary {
        background-color: cornflowerblue;
    }

    .btn-danger {
        background-color: red;
    }

    .btn-warning {
        background-color: gold;

    }
    }
</style>