 
<template>
 
  <v-app>
 
    <v-main>  
 
      <Menu/>    
 
        <IntroduccionNoticias/> 
 
        <GaleriaNoticias/>
 
        <Newsletter/>
 
        <router-view> 
 
          <v-content>
            
 
          </v-content>      
 
        </router-view>     
 
      <Footer/>        
 
    </v-main>
 
  </v-app>
 
</template>

 
<script>
	
	import Menu from './Menu';
	import Footer from './Footer';
	import IntroduccionNoticias from './Noticias/IntroduccionNoticias';
	import GaleriaNoticias from './Noticias/GaleriaNoticias';
	import Newsletter from './Home/Newsletter'; 
 
	export default {
		name: 'Servicios',
 
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'Servicios - Mi Proyecto';
				}
			},
		},
 
		components: {
			Menu,
			Footer,
			IntroduccionNoticias,
			GaleriaNoticias,
			Newsletter,
		},
 
	} 
 
</script>