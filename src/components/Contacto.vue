 
<template>
 
  <v-app>
 
    <v-main>
 
      <Menu />
 
      <IntroduccionContacto />
 
      <FormularioDatosRedes />
 
      <Mapa />
 
      <Newsletter />
 
      <router-view>
 
        <v-content>
       
        </v-content>
 
      </router-view>
 
      <Footer />
 
    </v-main>
 
  </v-app>
 
</template>

 
<script>
	
	import Menu from './Menu';
	import Footer from './Footer';
	import IntroduccionContacto from './Contacto/IntroduccionContacto';
	import FormularioDatosRedes from './Contacto/FormularioDatosRedes'; 
	import Mapa from './Contacto/Mapa'; 
	import Newsletter from './Home/Newsletter'; 
 
	export default {
		name: 'Contacto',
 
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'Contacto - Mi Proyecto';
				}
			},
		},
 
		components: {
 
			Menu,
			Footer,
			IntroduccionContacto,
			FormularioDatosRedes,
			Mapa,  
			Newsletter, 
 
		},
 
	} 
 
</script>