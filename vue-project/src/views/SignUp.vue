<template>

<div className="SignupPage">
    <h1>Sign Up</h1>
 
    <form class="formularioSign" @submit.prevent="handleSignupSubmit">
      <label>Email:</label>
      <input type="email" name="email" v-model="email" />
 
      <label>Password:</label>
      <input type="password" name="password" v-model="password" />
 
      <label>Name:</label>
      <input type="text" name="name" v-model="name" />
 
      <button type="submit">Sign Up</button>
    </form>
 
    <p>Already have account?</p>
    <RouterLink to="/login"> Login</RouterLink>
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
            name:"",

        }
    },
    methods:{
        ...mapActions(authJS, ['signup']) ,

        async handleSignupSubmit(){
           await this.signup(this.email,this.password,this.name)
           this.$router.push({ path: '/login', replace: true })
        }
    }
}


</script>

<style>


.formularioSign{
    display: flex;
    flex-direction: column;
    width:300px;
   
   
    
}



</style>