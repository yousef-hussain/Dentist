<template>
  <v-dialog v-model="dialog" activator="parent" width="auto">
    <v-card>
      <v-card-title class="text-h5 text-center" style="background-color: red; color: white; ">sorry</v-card-title>
      <v-card-text class="text-h6">
        this page Under construction
      </v-card-text>
      <v-card-actions>
        <v-btn size="large" color="green" block @click="dialog = false">Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
