<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <iframe
          src="https://www.youtube.com/embed/esFC2Pb4X90"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="video"
        ></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.video {
  width: 100%;
  height: clamp(200px, 40vw, 1200px);
}
</style>
