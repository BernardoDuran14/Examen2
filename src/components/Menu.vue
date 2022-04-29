<template>
  <v-card
    blue
  >
    <v-toolbar>

      <v-app-bar-nav-icon
        @click="drawer = true"
        v-if="$vuetify.breakpoint.xsOnly"
      >
      </v-app-bar-nav-icon>

      <v-toolbar-title
        :class="{'': $vuetify.breakpoint.smAndDown, 'ml-6': $vuetify.breakpoint.mdAndUp}">
        El Periodico La Paz
      </v-toolbar-title>

      <v-spacer></v-spacer>

        <v-btn to="/destacados" class="text-capitalize mr-2" v-bind:class="{ 'v-btn--active': $route.path == '/destacados' }" v-show="$vuetify.breakpoint.lgOnly">
          Home
        </v-btn>

        <v-btn to="/servicios" class="text-capitalize mr-2" v-bind:class="{ 'v-btn--active': $route.path == '/servicios' }" v-show="$vuetify.breakpoint.lgOnly">
          Nosotros
        </v-btn>

        <v-btn to="/clasificados" class="text-capitalize mr-2" v-bind:class="{ 'v-btn--active': $route.path == '/clasificados' }" v-show="$vuetify.breakpoint.lgOnly">
          Servicios
        </v-btn>

        <v-btn to="/contactos" class="text-capitalize mr-2" v-bind:class="{ 'v-btn--active': $route.path == '/contactos' }" v-show="$vuetify.breakpoint.lgOnly">
            Contacto
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      width="100%"
      height="auto"
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <v-list-item v-bind:class="{ 'bg-active': $route.path == '/destacados' }">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/destacados" class="flm">Destacados</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item v-bind:class="{ 'bg-active': $route.path == '/servicios' }">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/servicios" class="flm">Servicios</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item v-bind:class="{ 'bg-active': $route.path == '/clasificados' }">
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/clasificados" class="flm">Clasificados</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item v-bind:class="{ 'bg-active': $route.path == '/contactos' }">
            <v-list-item-icon>
              <v-icon>mdi-earth</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/contactos" class="flm">Contactos</router-link>
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </v-card>
</template>

<script>
  export default {
    name: 'Menu',

    methods: {
      menuItems() {
        return this.menu;
      }
    }

  }
</script>

<style scope>

  .bgsel:hover {
    background: #afaeae;
  }

  .flm:link {
    text-decoration: none;
  }

  .v-application a {
    color: #ffffff!important;
  }

</style>