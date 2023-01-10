<template>

<div className="LoginPage">
    <h1>Login</h1>
 
    <form class="formularioLogin" @submit.prevent="handleLoginSubmit">
      <label>Email:</label>
      <input type="email" name="email" v-model="email" />
 
      <label>Password:</label>
      <input type="password" name="password" v-model="password" />
 
      <button type="submit">Login</button>
    </form>
 
    <p>Don't have an account yet?</p>
    <RouterLink to="/signup"> Sign up</RouterLink>
  </div>

</template>


<script>

import authJS from '../stores/auth.js';
import {mapActions} from 'pinia';


export default{

    data(){
        return{
            email:"",
            password:"",
            

        }
    },

   
    methods:{
        ...mapActions(authJS,['login','authenticateUser']),
        async  handleLoginSubmit() {
     await this.login(this.email, this.password)
     
     await this.authenticateUser();
     
     this.$router.push({ path: '/login', replace: true })
    }
    },
    
  
}

</script>

<style>

.formularioLogin{
    display: flex;
    flex-direction: column;
    width:400px;
}




</style>