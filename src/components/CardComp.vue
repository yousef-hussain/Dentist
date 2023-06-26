<template>
  <v-card :style="styled" :elevation="0">
    <v-img :src="item.image" class="mb-xl-5"></v-img>
    <v-card-title class="text-uppercase mb-xl-5 fs-title">{{ item.title }}</v-card-title>
    <v-card-text class="card-text fs-text">{{ item.description }}</v-card-text>
  </v-card>
</template>
<script>
export default {
  props: ["item", "styled"],
};
</script>
<style scoped>
.card-text {
  line-height: 1.2;
}
</style>
