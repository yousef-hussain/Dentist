<template>
  <section class="services">
    <v-container>
      <v-row dense="">
        <v-col cols="12">
          <h2 class="text-uppercase font-weight-bold mb-5">SERVICES</h2>
        </v-col>
        <v-col class="pa-sm-5 pa-lg-15" cols="12" sm="6" md="4" v-for="(item, index) in items" :key="index">
          <Card :item="item" styled="border: 2px solid #ED9419;" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Card from '@/components/CardComp.vue';
import img1 from '@/assets/images/service-one.png'
import img2 from '@/assets/images/service-two.png'
import img3 from '@/assets/images/service-three.png'

export default {
  data() {
    return {
      items: [
        {
          image: img1,
          title: "Gold Grillz",
          description: "Explore a wide range of grill designs and material options to make",
        },
        {
          image: img2,
          title: "Diamond Grillz",
          description: "Swarovski crystal, 22k white & yellow gold tooth gem options",
        },
        {
          image: img3,
          title: "Silver Grillz",
          description: "Design and order your own unique piece with custom grill create",
        },
      ],
    };
  },
  components: {
    Card,
  }
};
</script>

<style lang="scss" scoped>
.services {
  @media (max-width: 599.9px) {
    padding: 20px 0;
  }
  @media (min-width: 600px) and (max-width: 959.9px) {
    padding: 30px 0;
  }
  @media (min-width: 960px) and (max-width: 1279.9px) {
    padding: 70px 0;
  }
  @media (min-width: 1280px) and (max-width: 1919.9px) {
    padding: 80px 0;
  }
  @media (min-width: 1920px) and (max-width: 2559.9px) {
    padding: 100px 0;
  }
  @media (min-width: 2560px) {
    padding: 120px 0;
  }
}
</style>
