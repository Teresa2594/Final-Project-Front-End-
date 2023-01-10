<template>
    <nav class="navbar">
      <div class="img">
      <img src="../assets/Captura de pantalla 2023-01-03 a las 10.15.55.png" alt="logo de inicio">
      </div> 

   
      <div class="menu-item"><router-link to="/">Home</router-link></div>
      
      <Dropdown :header="descubreTitle" :items="descubre"/>
     
      <div class="menu-item"><router-link to="/ComerYBeber">Comer y Beber</router-link></div>
      <div class="menu-item"><router-link to="/DondeDormir">Donde dormir</router-link></div>
     
      <div v-if="isLoggedIn" class="menu-item"><router-link  to="/Blog">Blog</router-link></div>
      
      <button v-if="isLoggedIn" @click="handleLogOut()" >Logout</button>

      <span v-if="!isLoggedIn">
      <RouterLink to="/signup">
        <button>Sign Up</button>
      </RouterLink>

      <RouterLink to="/login">
        <button>Login</button>
      </RouterLink>
    </span>
      
    
    </nav>

  </template>
  
  <script>
 
import Dropdown from './Dropdown.vue';
import authJS from '../stores/auth.js';
import {mapActions, mapState} from 'pinia';
import auth from '../stores/auth.js';


  export default {
    name: 'navbar',
    components: {
        Dropdown
    },
    data () {
      return {
        descubreTitle:{
          title:"Descubre",
          link:"/Descubre"
        },
        descubre:[
          {
            title: 'Situacion',
            link:'/Situacion'
          },
          {
            title: 'Como llegar',
            link: '#'
          },
          {
            title: 'Historia',
            link: '#'
          },
        ],
      }
    },

    computed:{
      ...mapState(authJS,["user","isLoggedIn"])
      

    },
    methods:{
      ...mapActions(authJS,['logOutUser','authenticateUser']),

      async  handleLogOut() {
  this.logOutUser().then(() => {
   this.authenticateUser();
    router.push("/");
  });
}
    }
    
  }
  </script>
  
  <style>

  img{
    width: 150px;
  }
 
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'montserrat', sans-serif;
    width: 100vw;
    background-color: white;
    padding: 15px;
  }
 
  nav .menu-item {
    color: black;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
  }


  nav .menu-item.active,
  nav .menu-item:hover {
    background-color: rgba(227, 227, 227, 0.986);
    border-bottom-color: #FF5858;
  }
  nav .menu-item a {
    color: inherit;
    text-decoration: none;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}




  </style>