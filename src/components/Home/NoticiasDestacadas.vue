<template>

  <v-item-group class="mt-6">

    <v-container>

      <v-row>

        <!-- Noticia 1 -->
        <v-card
            class="mx-auto"
            max-width="344"
        >
          <v-img
              src="img/noticia1.png"
              height="200px"
          ></v-img>

          <v-card-title class="justify-center">
            Servicio 1
          </v-card-title>

          <v-card-subtitle class="alinearjustificado">
            El incremento del 4% al salario mínimo nacional causará una afectación de $us 216 millones a los empresarios del país. No todos los sectores empresariales podrán cumplir con este ajuste.

            Estos criterios fueron expresados por el expresidente de la Cámara Nacional de Comercio (CNC) Rolando Kempff y el presidente de la Federación de Empresarios de La Paz (FEPLP), Jaime Ascarrunz, en la transmisión digital Piedra, Papel y Tinta, de La Razón.

            En este programa conducido por la directora de esta casa periodística, Claudia Benavente, se analizó el acuerdo entre el gobierno de Luis Arce y la dirigencia de la Central Obrera Boliviana (COB) que dio luz verde a un incremento de 3% al haber básico y 4% al mínimo nacional.
          </v-card-subtitle>

          <v-btn
              class="ml-3 mb-3"
              color="primary"
          >
            Leer más ...
          </v-btn>

        </v-card>

        <!-- Noticia 2 -->
        <v-card
            class="mx-auto"
            max-width="344"
        >
          <v-img
              src="img/noticia2.png"
              height="200px"
          ></v-img>

          <v-card-title class="justify-center">
            Servicio 2
          </v-card-title>

          <v-card-subtitle class="alinearjustificado">
            Después de haber estado casi 14 años al mando del país, el expresidente y jefe del Movimiento Al Socialismo (MAS), Evo Morales, aseguró este viernes que goza de su libertad y que “nunca quisiera ser funcionario”.

            “Yo gozo mi libertad, yo nunca quisiera ser funcionario. Ser funcionario, a las 08.00, 08.30, hay que entrar, hay que marcar, para ir a comer hay que marcar otro (…). Yo he visto que hasta para ir al baño están pidiendo permiso del gerente, del jefe o no sé”, afirmó.

            Morales fue Jefe del Estado entre el 22 de enero de 2006 y 10 de noviembre de 2019. “Claro, como presidente, también era funcionario, ¿verdad? Pero dependía de mí, pues”, ironizó.
          </v-card-subtitle>

          <v-btn
              class="ml-3 mb-3"
              color="primary"
          >
            Leer más ...
          </v-btn>
        </v-card>

        <!-- Noticia 3 -->
        <v-card
            class="mx-auto"
            max-width="344"
        >
          <v-img
              src="img/noticia3.png"
              height="200px"
          ></v-img>

          <v-card-title class="justify-center">
            Servicio 3
          </v-card-title>

          <v-card-subtitle class="alinearjustificado">
            En la tercera semana de partidos por fase de grupos, Independiente Petrolero fue el primero en salir al ruedo, el martes. Cayó 1-2 con el venezolano Deportivo Táchira en el Patria de Sucre, lo que deparó una victoria histórica para el llanero, su primer logró en territorio boliviano.

            Marcha último con un solo punto. Disputó tres encuentros: un empate y dos derrotas. Anotó tres goles y recibió 11. Le restan por jugar tres cotejos más: uno en condición de dueño de casa y dos de visitante.

            The Strongest recibió a otro venezolano, Caracas FC, empató a un gol por lado el miércoles en el Hernando Siles y rompió su racha de tres victorias contra equipos de ese país. Minervén, Marítimo y Trujillanos cayeron anteriormente contra el elenco paceño.
          </v-card-subtitle>

          <v-btn
              class="ml-3 mb-3"
              color="primary"
          >
            Leer más ...
          </v-btn>

        </v-card>

      </v-row>

    </v-container>

  </v-item-group>


</template>

<script>

export default {

  name: 'Destacados',

}

</script>

<style scope>
.alinearjustificado {
  text-align: justify;
}
</style>