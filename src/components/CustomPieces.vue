<template>
  <section class="custom-pieces">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-uppercase font-weight-bold mb-5">PRE-DESIGNED CUSTOM PIECES</h2>
        </v-col>
        <v-col v-for="(item, index) in items" :key="index" cols="12" sm="6" md="4" lg="3">
          <Card :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>


<script>
import Card from "@/components/CardComp.vue";

import image1 from "@/assets/images/piece-one.png";
import image2 from "@/assets/images/piece-two.png";
import image3 from "@/assets/images/piece-three.png";
import image4 from "@/assets/images/piece-four.png";
import image5 from "@/assets/images/piece-five.png";


export default {
  data() {
    return {
      items: [
        {
          image: image1,
          title: "SILVER Grillz",
          description: "Explore a wide range of grill make designs & material options",
        },
        {
          image: image2,
          title: "WHITE GOLD",
          description: "Explore a wide range of grill make designs & material options",
        },
        {
          image: image3,
          title: "CHROME",
          description: "Explore a wide range of grill make designs & material options",
        },
        {
          image: image4,
          title: "CUBIC ZIRCONIA",
          description: "Explore a wide range of grill make designs & material options",
        },
        {
          image: image3,
          title: "CHROME Grillz",
          description: "Explore a wide range of grill make designs & material options",
        },
        {
          image: image4,
          title: "CUBIC ZIRCONIA",
          description: "Explore a wide range of grill make designs & material options",
        },
        {
          image: image5,
          title: "Gold Grillz",
          description: "Explore a wide range of grill make designs & material options",
        },
        {
          image: image2,
          title: "Gold Grillz",
          description: "Explore a wide range of grill make designs & material options",
        },
      ]
    }
  },
  components: {
    Card,
  }
}
</script>