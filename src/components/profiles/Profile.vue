<template>
     <div class='profile'>
            <div class="profile-left">
                <div class="card card-1">
                   
                    <div v-if="user.gender == 'female' ">
                        <img src="../../zenskiavatar.jpg" alt="">
                    </div>
                    <div v-if="user.gender == 'male' ">
                        <img src="../../muskiavatar.jpg" alt="">
                    </div>
                    
                    <!-- <div v-else>
                    </div> -->
                    <h2>{{user.firstname}} {{user.lastname}}</h2>
                    <h4>{{user.role}}</h4>
                    <h4>Sarajevo, {{user.address}}</h4>
                    <div class="button-group">
                        <button type="button" class="button-group-1">Dodijeli</button>
                        <button type="button" class="button-group-2">Kontakt</button>
                    </div>
                </div>
                <div class="card card-2">
                    <div class="icons">
                        <font-awesome-icon icon="fa-brands fa-facebook-square" />
                        <p>Facebook</p>
                    </div>
                    <div class="icons">
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                        <p>LinkedIn</p>
                    </div>
                    <div class="icons">
                      <font-awesome-icon icon="fa-brands fa-square-instagram" />
                        <p>Instagram</p>
                    </div>
                    <div class="icons">
                        <font-awesome-icon icon="fa-brands fa-twitter-square" />
                        <p>Twitter</p>
                    </div>
                </div>
            </div>
            <div class="profile-right">
                <div class="card card-3">
                    <div class="info">
                        <h2>Full name</h2>
                        <h4>{{user.firstname}} {{user.lastname}}</h4>
                    </div>
                    
                     <div class="info">
                        <h2>Email</h2>
                        <h4>{{user.email}}</h4>
                    </div>
                    <div class="info">
                        <h2>Address</h2>
                        <h4>{{user.address}}</h4>
                    </div>
                     <div class="info">
                        <h2>Phone</h2>
                        <h4>123 456 789</h4>
                    </div>
                </div>
                <div class=" card card-4">
                    <div class="card card-5">
                        
                      <h3>Status poslovanja</h3>
                            <div class="work-progress">
                                <p>Zaposlenih</p>
                                <div class="progress-outer">
                                    <div class="progress-inner-one"></div>
                                </div>
                            </div>
                            <div class="work-progress">
                                <p>Unaprijedjenih</p>
                                <div class="progress-outer">
                                    <div class="progress-inner-two"></div>
                                </div>
                            </div>
                            <div class="work-progress">
                                <p>Novih sektora</p>
                                <div class="progress-outer">
                                    <div class="progress-inner-three"></div>
                                </div>
                            </div>
                            <div class="work-progress">
                                <p>Novih soba</p>
                                <div class="progress-outer">
                                    <div class="progress-inner-four"></div>
                                </div>
                            </div>
                             <div class="work-progress">
                                <p>Prekovremenih sati</p>
                                <div class="progress-outer">
                                    <div class="progress-inner-five"></div>
                                </div>
                            </div>
                    </div>
                    <div class="card card-6">
                        <h3>Slikovni prikaz</h3>
                        <p>Slikovni prikaz poslovanja tokom mjeseca</p>
                        <Chart />
                            
                        
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Chart from '../charts/Chart.vue'
 export default {
    name: 'Profile',
    components: {Chart},
     data(){
            return {
                user:this.$store.state.user
            }
        },

    mounted(){
       
        
        
        if(!this.user){
            this.$router.push('/')
        }

        if(this.user.role != 'sef'){
            this.$router.push(`${this.user.role}`)

        }else if(this.user.role != 'uposlenik'){
            this.$router.push(`${this.user.role}`)

        }else if(this.user.role != 'admin'){
            this.$router.push(`${this.user.role}`)

        }

        window.addEventListener('resize' , () => {
            let x = window.innerWidth

            if(window.innerWidth > 600){
        
                document.querySelector('.side-nav').style = "transform: translate(0%,0%)"
            }else{
                document.querySelector('.side-nav').style = "transform: translate(-100%,0%)"
            }
        })
      
        this.$store.state.sidenav = false;

    }
 }
</script>

<style scoped>
.profile{
    width:70%;
    margin:auto;
    margin-top:2%;
    display: flex;
    justify-content: center;
    gap:10px;
    box-sizing: border-box;
    transform: translate(-4%,0%);
}
.profile-left{
    width:30%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    gap:10px;
}
.profile-right{
    width:70%;
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    gap:10px;
}
.card{
    border-radius: 5px;
    /* margin-bottom:10px; */
}
.card-1{
    width: 100%;
    padding:10px;
    background-color: cornflowerblue;
}
.card-1 img{
    width:150px;
    height:150px;
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin:auto;
    margin-bottom:3%;
}
.card-1 h2{
    color:white;
    text-align: center;
     margin-bottom:5%;
}
.card-1 h4{
    color:rgb(101, 101, 101);
    margin-bottom:5px;
    text-transform: capitalize;
    text-align:center;
}
.card-1 .button-group{
    display:flex;
    justify-content: center;
    align-items: center;
    width:70%;
    margin:auto;
    margin-top:10%;
    gap:10px;
}
.card-1 .button-group-1{
    background: white;
 border:1px solid white;
cursor:pointer;
    border-radius: 5px;
    color:cornflowerblue;
    padding:13px 25px;
}
.card-1 .button-group-2{
    background: transparent;
    border:1px solid white;
    border-radius: 5px;
    color:white;
    padding:13px 25px;
    cursor:pointer;
}
.card-2{
    width:100%;
    background-color: cornflowerblue;
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:10px;
}
.card-2 .icons{
    display: flex;
    
    justify-content: space-between;
    align-items: center;
    padding:10px 20px;
    border:1px solid white;
    border-radius: 5px;
    cursor: pointer;
     color:white;
    font-size:25px;
    transition:.5s;
    
}

.card-2 .icons:hover {
    background-color:white;
    color:cornflowerblue;
    transition:.5s;
}
.card-3{
    width:100%;
    height:35%;
    background-color: cornflowerblue;
    padding:10px;
    box-sizing: border-box;
}
.card-3 h2{
    width:20%;
    color:white;
}
.card-3 h4{
    color:rgb(101, 101, 101);
}
.info{
    display: flex;
    justify-content: left;
    align-items: center;
    gap:30px;
    padding:10px;
}
.card-4{
    width:100%;
    height:65%;
    display: flex;
    
    padding:20px;
    background-color: cornflowerblue;
gap:10px;
}
.card-5{
    width:50%;
   
    padding:20px;
    background-color: white;
    color:cornflowerblue;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    
}
.card-5 .work-progress{
    display:flex;
    gap:10px;
    padding:10px 0px;
    align-items: center;
}
.work-progress p{
    width:50%;
    word-break: break-all;
    font-weight: 600;
    font-size:15px;
}
.progress-outer{
    width:100%;
    height: 5px;
    background: gainsboro;
}
.progress-inner-one{
    width:90%;
    height:100%;
    background-color:cornflowerblue;
}
.progress-inner-two{
    width:70%;
    height:100%;
       background-color:cornflowerblue;

}.progress-inner-three{
    width:75%;
    height:100%;
       background-color:cornflowerblue;

}
.progress-inner-four{
    width:80%;
    height:100%;
       background-color:cornflowerblue;

}.progress-inner-five{
    width:77%;
    height:100%;
       background-color:cornflowerblue;

}
.card-6{
    width:50%;
    /* display: none; */
    background-color:white ;
    padding:20px;
    color:cornflowerblue;
}

@media (max-width:567px) {
    .profile{
    width:95%;
    flex-direction: column;
    transform: translate(0%,0%);
    padding-bottom:30px;
    
}
.profile-left{
    width:100%;

}
.profile-right{
    width:100%;
   
}
.card-4{
    flex-direction: column;
}
.card-5,.card-6{
    width:100%;
}
}

</style>