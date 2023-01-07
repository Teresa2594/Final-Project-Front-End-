<template>
    <header>
        <NavBarVue></NavBarVue>
    </header>
    <body class="body">  
        
        <div class="iconplus">
        <i @click="trigger()" class="fa-solid fa-square-plus fa-2x" name="icon-plus"></i>
    </div>

        <Popup v-if="buttonTrigger" :trigger="()=>this.buttonTrigger=false" >
            <SavePost></SavePost>
        </Popup>

        <ul class="post-list">
        <li v-for="post in posts" :key="post.title">
        <BlogCard :post="post"></BlogCard>
        </li>
       </ul>
    </body>


    <footer>
        <Footer></Footer>
    </footer>

</template>

<script>

import NavBarVue from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import BlogCard from '../components/BlogCard.vue'
import Popup from '../components/Popup.vue'
import SavePost from '../components/SavePost.vue'

export default{
    components:{
        NavBarVue,
        Footer,
        BlogCard,
        Popup,
        SavePost
    },
    data(){
        
    return {
        posts:[],
        buttonTrigger:false,
    
    };
    },

    methods:{
       trigger() {
            this.buttonTrigger=true;
        },
       
    },

    async created(){    
        for (let i = 1; i <6; i++) {  
        const response = await fetch(`http://localhost:8083/api/posts/${i}`)
        const data = await response.json();
        const post ={
            title:data.title,
            date:data.date,
            section:data.section,
            description:data.description,
            imagen:data.urlImagen
            };

this.posts.push(post);   
}
}
}

</script>



<style>

.post-list{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    list-style-type: none;
    gap: none;
}

.iconplus{
    display: flex;
    justify-content: right;
    padding-right: 30px;
    
}








</style>