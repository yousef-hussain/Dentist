<template>
  <section class="Make-piece py-5 py-md-10">
    <v-container>
      <v-row>
        <v-col cols="12" sm="9" class="d-flex flex-column justify-center">
          <h2 class="text-uppercase mb-1 mb-md-3 mb-lg-5 fs-header">MAKE YouR MOULD</h2>
          <p class="mb-2 mb-md-4 mb-lg-6 w-75 fs-text">watch the diy mold kit video and take your mold in the comfort of your own home, and shoot it to us in the satchel provided</p>
          <v-btn class="btn text-white py-4 px-6 fs-text" :elevation="0" size="lg" :width="100">
            MOULD KIT
          <Dialog />
          </v-btn>
        </v-col>
        <v-col cols="3" class="d-none d-sm-flex justify-center align-center">
          <v-img src="@/assets/images/custom-piece.png" class="w-100"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
.Make-piece {
  background-color: #29395bb3;
  color: white;

  .btn {
    background-color: #ED9419;
    border-radius: 50px;
    width: clamp(150px, 30vw, 200px);
  }
}
</style>