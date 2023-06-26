<template>
  <Header />
  <Main />
  <Services />
  <CustomPieces />
  <MakePiece />
  <Reviews />
  <Video />
  <Footer />
</template>

<script>
  import Header from '@/components/Header.vue';
  import Main from '@/components/Main.vue';
  import Services from '@/components/Services.vue';
  import CustomPieces from '@/components/CustomPieces.vue';
  import MakePiece from '@/components/MakePiece.vue';
  import Reviews from '@/components/Reviews.vue';
  import Video from '@/components/Video.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    components: {
      Header,
      Main,
      Services,
      CustomPieces,
      MakePiece,
      Reviews,
      Video,
      Footer,
    }
  }
</script>

<style>
.v-main  {
  --v-layout-top: 0 !important;
}
</style>