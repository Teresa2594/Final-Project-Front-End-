<template>

<h1>Agrega un nuevo Post</h1>

<form @submit="sendForm" class="formulario">
    <label>Id del post</label>
    <input id="post" type="text" v-model="post.id">

    <label>Título</label>
    <input id="title" type="text" v-model="post.title">
    
    <label>Fecha de publicación</label>
    <input type="text" v-model="post.date">

    <label>Sección</label>
    <input type="text" v-model="post.section">

    <label>ID del usuario</label>
    <input type="text" v-model="post.userId">

    <label>Descripción</label>
    <input type="text" v-model="post.description">

    <label>Url de la imágen</label>
    <input type="text" v-model="post.urlImagen">
    
    <input type="submit" value="Enviar">
    

</form>


</template>


<script>

export default{
    data(){
        
        return {
           

            post:{
                id:"",
                title:"",
                date:"",
                section:"",
                userId:"",
                description:"",
                urlImagen:"",
            }
        }
    },
    methods:{
        sendForm(e){
            
            const id = this.post.id;
           const title=this.post.title;
           const date=this.post.date;
           const section=this.post.section;
           const userId=this.post.userId;
           const description=this.post.description;
           const urlImagen=this.post.urlImagen;
          
          fetch (`http://localhost:8083/api/posts`,{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify({id,title,date,section,userId,description,urlImagen})
            })
        }
        },

       
    }
</script>

<style>


.formulario{
    display:flex;
    flex-direction: column;
}

</style>