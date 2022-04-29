<template>

  <v-carousel v-model="model" height="auto" class="mt-3" hide-delimiters>
    <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
    >
    </v-carousel-item>
  </v-carousel>

</template>

<script>
export default {
  name: 'Carousel',

  data: () => ({

    items: [
      {
        src: 'https://static.eldeber.com.bo//Files/Sizes/2022/4/29/luis-larrea-titular-del-colegio-de-mdico-de-bolivia-anuncia-mo_1627046428_1140x520.jpeg',
      },
      {
        src: 'https://static.eldeber.com.bo//Files/Sizes/2022/4/29/detenido-_1637013897_1140x520.jpg',
      },
      {
        src: 'https://static.eldeber.com.bo//Files/Sizes/2022/4/29/aniversario-53-de-la-villa-primero-de-mayo-foto-enrique-canedo_1637801788_1140x520.jpeg',
      },
      {
        src: 'https://static.eldeber.com.bo//Files/Sizes/2022/4/29/jeanine-ez-y-eliane-capobianco_1622309710_1140x520.PNG',
      },
    ],

    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],

  })

}
</script>