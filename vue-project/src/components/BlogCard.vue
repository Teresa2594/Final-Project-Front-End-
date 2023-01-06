<template>

<section id="blog" class="section-100">
		<div class="container">
			<div class="row">
				<div class="col-md-4 offset-md-4">
					<div class="blog-card">
						<img :src="post.imagen" alt="" class="blog-thumbnail">
						<div class="blog-container">
							<a href="#!" class="blog-category text-uppercase dark-link">{{post.title}}</a>
							<p class="blog-desc">{{post.description}}</p>
							<div class="blog-footer">
                                <div class="blog-author">{{post.section}} </div>
								<small>{{post.date}}</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    
</template>

<script>

export default {
    props:{
        post:{
            type:Object, 
            default:{
                title:"Nieve y más nieve",
                date:"2022-05-03",
                section:"Nieve",
                description:"Un viaje a la nieve que estuvo muy pero que muy muy muy muy guachiiii",
                imagen:"https://services.meteored.com/img/article/que-es-la-nieve-tipos-y-prediccion-304931-1_1280.jpg"

            }
        }
    }
}


</script>


<style>

.container{
    display: flex;
    align-items: center;
    margin-left: 30px;
}

.primary-color {
	color: #007bff;
}

.section-100 {
	padding-bottom: 20px ;
}

.blog-card {
	background: #fff;
	border-radius: 5px;
	margin-bottom: 30px;
	overflow: hidden;
	box-shadow: 0 12px 17px rgba(129, 140, 151, 0.1);
    width: 400px;
    height: max-content;;
}
.blog-card .blog-thumbnail {
	width: 400px;
	height: 220px;
	object-fit: cover;
}
.blog-card .blog-container {
	padding: 30px;
	position: relative;
	padding-bottom: 70px;
}
.blog-card .blog-container a:hover {
	text-decoration: none;
	color: #0062cc;
}
.blog-card .blog-container .dark-link {
	color:darkturquoise;
    text-decoration: none;
    
}
.blog-card .blog-container .blog-desc {
	color: #8b949d;
}
.blog-card .blog-container .blog-author {
	height: 30px;
	width: 30px;
	border-radius: 30px;
	margin-right: 5px;
}
.blog-card .blog-container .blog-footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px 30px;
	border-top: 1px solid #ddd;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
}

.blog-desc{
    padding-top:15px;
    padding-bottom:25px;
}
.blog-thumbnail{
    transition: transform .5s;
}
.blog-thumbnail:hover{
    transform: scale(1.1);
    filter: brightness(50%); 
}



</style>