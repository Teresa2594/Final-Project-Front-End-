<template>
    <header>
        <NavBar></NavBar>
    </header>

    <body>
        
        <div class="atras">
            <router-link class="users" to="/Blog">
                <i class="fa-solid fa-arrow-left fa-2x"></i></router-link>
    </div>

        <ul class="users-list">
            <li v-for="user in users" :key="user.name">
                <UserCard :user="user"></UserCard>
            </li>
        </ul>



    </body>

  <footer>
    <Footer></Footer>
  </footer>

</template>

<script>

import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import UserCard from '../components/UserCard.vue'

export default{
    components:{
        NavBar,
        Footer,  
        UserCard
    },
    
    data(){
        return {
            users:[]
        }
    },


    async created() {
        for (let i = 1; i<3; i++) {
            const response = await fetch(`http://localhost:8081/api/blog/user/${i}`);
            const data = await response.json();
            const user = {
                name:data.user.name,
                email:data.user.email,
                posts:data.posts
            };

            this.users.push(user);
        }
    },

}


</script>


<style>

.users-list{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    list-style-type: none;
    gap: none;
}

.atras{
    padding-left: 10px;
}

 .users .fa-solid:hover{
  color: darkturquoise;
}


</style>