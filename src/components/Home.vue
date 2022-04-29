<template>

  <v-app>

    <v-main>

      <Menu/>

      <Carousel/>
      <ServiciosDestacados/>

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
import Carousel from './Home/Carousel';
import ServiciosDestacados from './Home/NoticiasDestacadas';
import Footer from './Footer';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',

  watch: {
    $route: {
      immediate: true
    },
  },

  components: {
    Menu,
    Carousel,
    ServiciosDestacados,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>