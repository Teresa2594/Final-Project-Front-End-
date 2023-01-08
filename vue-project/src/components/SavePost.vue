<template>

<h1 class="titleForm">Agrega un nuevo post</h1>

<form @submit="sendForm" class="formulario">
    <label class="labels">Id del post</label>
    <input class="inputs" id="post" type="text" v-model="post.id">

    <label class="labels">Título</label>
    <input class="inputs" id="title" type="text" v-model="post.title">
    
    <label class="labels">Fecha de publicación</label>
    <input class="inputs" type="date" v-model="post.date">

    <label class="labels">Sección</label>
    <input class="inputs" type="text" v-model="post.section">

    <label class="labels">ID del usuario</label>
    <input class="inputs" type="text" v-model="post.userId">

    <label class="labels">Descripción</label>
    <textarea class="inputs" type="text" v-model="post.description" rows="10" cols="5" ></textarea>

    <label class="labels">Url de la imágen</label>
    <input class="inputs" type="text" v-model="post.urlImagen">
    
    <input type="submit" value="Enviar" class="enviar" >

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

.titleForm{
    color: aliceblue;
}

.labels{
    color: aliceblue;
}

.inputs{
    margin-bottom:30px;
}

.enviar{
    width: 50px;
}



</style>