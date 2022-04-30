 
<template>
 
  <v-app>
 
    <v-main>  
 
      <Menu/>    
 
        <IntroduccionServicios/> 
 
        <GaleriaServicios/>
 
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
	import IntroduccionServicios from './Servicios/IntroduccionServicios';
	import GaleriaServicios from './Servicios/GaleriaServicios';
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
			IntroduccionServicios,
			GaleriaServicios,
			Newsletter,
		},
 
	} 
 
</script>