<template>
  <v-card style="border: 1px solid #ed9419">
    <v-card-title>
      <v-list-item>
        <template #prepend>
          <v-avatar :image="item.image"></v-avatar>
        </template>
        <p class="fs-text">{{ item.name }}</p>
      </v-list-item>
    </v-card-title>
    <v-card-subtitle>{{ item.grade }}</v-card-subtitle>
    <v-card-text>
      <p class="mb-3 fs-text">
        {{ item.text }}
      </p>
      <v-rating
        :model-value="item.rating"
        color="amber"
        density="compact"
        half-increments
        readonly
        size="small"
      ></v-rating>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: ["item"],
};
</script>
