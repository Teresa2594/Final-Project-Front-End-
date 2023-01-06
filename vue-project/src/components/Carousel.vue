<template>
    <div class="carousel">
    <slot></slot>
    <button @click="next" class="next">N</button>
    <button @click="prev" class="previous">P</button>
</div>
    
    


</template>

<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        next(){
           this.$emit('next') 
        },
        prev(){
            this.$emit('prev') 

        }
    }
}

</script>

<style>

.carousel{
    position: relative;
    display: inline-block;
    text-align: center;  
}

button{
    height: 40px;
    width: 50px;
    border: none;
    border-radius: 50px;
    opacity: 0.0 - 1.0;
}

button:focus, button:hover{
    outline:none;
    cursor:pointer;
    
}

.next{
    position: absolute;
    top: 45%;
    right: 0%;
    margin-right: 45px;
}

.previous{
    position: absolute;
    top: 45%;
    left: 0%; 
    margin-left: 45px;
}


</style>