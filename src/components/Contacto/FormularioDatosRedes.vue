<template>
     
<h4 class="ael">Formulario</h4>
 
<validation-observer ref="observer">
 
  <form @submit.prevent="submit">
 
    <validation-provider v-slot="{ errors }" name="Nombre" rules="required|max:50">
      <v-text-field v-model="name" :counter="50" :error-messages="errors" label="Nombre"></v-text-field>
    </validation-provider>
 
    <validation-provider v-slot="{ errors }" name="Telefono" :rules="{
                required: true,
                digits: 7
              }">
      <v-text-field v-model="telefono" :counter="7" :error-messages="errors" label="Telefono"></v-text-field>
    </validation-provider>
 
    <validation-provider v-slot="{ errors }" name="email" rules="required|email">
      <v-text-field v-model="email" :error-messages="errors" label="Email"></v-text-field>
    </validation-provider>
 
    <validation-provider v-slot="{ errors }" name="Mensaje" rules="required">
      <v-textarea v-model="mensaje" name="input-7-1" :error-messages="errors" label="Mensaje"></v-textarea>
    </validation-provider>
 
    <v-btn class="mr-4 mt-5" type="submit" color="primary"> Aceptar </v-btn>
    <v-btn class="mt-5" @click="clear" color="secondary"> Limpiar </v-btn>
 
  </form>
 
</validation-observer>
</template>

<template>
    <div class="datosdecontacto">
  <h4 class="ael pb-2">Datos de Contacto</h4>
  <div class="ael">
    <div class="pb-2">
      <v-icon color="black"> mdi-home </v-icon> Av. Lunitas # 333 - Pasales
    </div>
    <div class="pb-2">
      <v-icon color="black"> mdi-phone </v-icon> 01 444 4444
    </div>
    <div class="pb-2">
      <v-icon color="black"> mdi-cellphone </v-icon> 999 999 999
    </div>
    <div class="pb-2">
      <v-icon color="black"> mdi-email </v-icon> correo@miproyecto.com
    </div>
  </div>
</div>
<div class="rs mt-7">
  <h4 class="ael pb-2">Redes Sociales</h4>
  <div class="ael">
    <ul>
      <li>
        <a href="#" title="Facebook">
          <v-icon large color="black"> mdi-facebook </v-icon>
        </a>
        <a href="#" title="Twitter">
          <v-icon large color="black"> mdi-twitter </v-icon>
        </a>
        <a href="#" title="Instagram">
          <v-icon large color="black"> mdi-instagram </v-icon>
        </a>
        <a href="#" title="YouTube">
          <v-icon large color="black"> mdi-youtube </v-icon>
        </a>
        <a href="#" title="LinkedIn">
          <v-icon large color="black"> mdi-linkedin </v-icon>
        </a>
        <a href="#" title="Spotify">
          <v-icon large color="black"> mdi-spotify </v-icon>
        </a>
        <a href="#" title="Discord">
          <v-icon large color="black"> mdi-discord </v-icon>
        </a>
      </li>
    </ul>
  </div>
</div>
 
</template>


 
<template>
 
  <v-container
    class="mt-10"
  >
 
    <v-row>
 
      <div class="col-md-5"> 
 
        <h4 class="ael">Formulario</h4>
 
        <validation-observer
          ref="observer"
        >
          <form @submit.prevent="submit">
 
            <validation-provider
              v-slot="{ errors }"
              name="Nombre"
              rules="required|max:50"
            >
              <v-text-field
                v-model="name"
                :counter="50"
                :error-messages="errors"
                label="Nombre"
              ></v-text-field>
            </validation-provider>
 
            <validation-provider
              v-slot="{ errors }"
              name="Telefono"
              :rules="{
                required: true,
                digits: 7
              }"
            >
              <v-text-field
                v-model="telefono"
                :counter="7"
                :error-messages="errors"
                label="Telefono"
              ></v-text-field>
            </validation-provider>
 
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                v-model="email"
                :error-messages="errors"
                label="Email"
              ></v-text-field>
            </validation-provider> 
 
            <validation-provider
              v-slot="{ errors }"
              name="Mensaje"
              rules="required"
            >
              <v-textarea
                v-model="mensaje"
                name="input-7-1"
                :error-messages="errors"
                label="Mensaje"
              ></v-textarea>
            </validation-provider> 
 
            <v-btn
              class="mr-4 mt-5"
              type="submit"
              color="primary"
            >
              Aceptar
            </v-btn>
 
            <v-btn 
              class="mt-5"
              @click="clear"
              color="secondary"
            >
              Limpiar
            </v-btn>
 
          </form>
 
        </validation-observer> 
 
      </div> 
 
 
      <div class="col-md-2"></div>
      
 
      <div class="col-md-5"> 
 
 
        <div class="datosdecontacto">
 
          <h4 class="ael pb-2">Datos de Contacto</h4>
 
          <div class="ael"> 
 
            <div class="pb-2">
              <v-icon color="black">
                mdi-home
              </v-icon>
 
              Av. Lunitas # 333 - Pasales 
            </div> 
 
            <div class="pb-2">
              <v-icon color="black">
                mdi-phone
              </v-icon>
 
              01 444 4444 
            </div>
 
            <div class="pb-2">
              <v-icon color="black">
                mdi-cellphone
              </v-icon>
 
              999 999 999
            </div>
 
            <div class="pb-2">
              <v-icon color="black">
                mdi-email
              </v-icon>
 
              correo@miproyecto.com
            </div>
 
          </div> 
 
        </div>
 
 
        <div class="rs mt-7">
 
          <h4 class="ael pb-2">Redes Sociales</h4>
 
          <div class="ael"> 
 
            <ul>
 
              <li> 
 
                <a href="#" title="Facebook">
                  <v-icon large color="black">
                    mdi-facebook
                  </v-icon>
                </a>
 
                <a href="#" title="Twitter">
                  <v-icon large color="black">
                    mdi-twitter
                  </v-icon>
                </a>
 
                <a href="#" title="Instagram">
                  <v-icon large color="black">
                    mdi-instagram
                  </v-icon>
                </a> 
 
                <a href="#" title="YouTube">
                  <v-icon large color="black">
                    mdi-youtube
                  </v-icon>
                </a> 
 
                <a href="#" title="LinkedIn">
                  <v-icon large color="black">
                    mdi-linkedin
                  </v-icon>
                </a> 
 
                <a href="#" title="Spotify">
                  <v-icon large color="black">
                    mdi-spotify
                  </v-icon>
                </a> 
 
                <a href="#" title="Discord">
                  <v-icon large color="black">
                    mdi-discord
                  </v-icon>
                </a> 
                
              </li>
 
            </ul>
 
          </div> 
 
        </div>
 
      </div>
 
 
    </v-row> 
 
  </v-container>
 
</template>
 
<script> 
 
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate' 
 
  setInteractionMode('eager')
 
  extend('digits', {
    ...digits,
    message: '{_field_} necesita ser {length} digitos. ({_value_})',
  })
 
  extend('required', {
    ...required,
    message: '{_field_} no puede estar vacío',
  })
 
  extend('max', {
    ...max,
    message: '{_field_} no puede ser mayor que {length} caracteres',
  })
 
  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} no coincide {regex}',
  })
 
  extend('email', {
    ...email,
    message: 'Ingresa un Email válido',
  }) 
 
  export default {
    name: 'SobreNosotros', 
 
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      nombre: '',
      telefono: '',
      email: '',
      mensaje: '',
    }),
 
    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.nombre = ''
        this.telefono = ''
        this.email = '' 
        this.mensaje = '' 
        this.$refs.observer.reset()
      },
    },
 
  } 
 
</script> 
 
<style scoped> 
 
  .ael {
    text-align: left !important;
  } 
 
  .rs > div > ul > li {
    display: inline; 
  } 
 
  .rs > div > ul {
    padding-left: initial;
  }
  
</style>
 