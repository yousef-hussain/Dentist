<template>
  <v-container>
    <h2 class="text-uppercase font-weight-bold mb-5">reviews</h2>
    <Swiper
      :navigation="true"
      style="padding: 10px 0 100px"
      :breakpoints="swiperOptions.breakpoints"
    >
      <SwiperSlide v-for="(item, index) in users" :key="index">
        <CarouselCard :item="item" />
      </SwiperSlide>
    </Swiper>
  </v-container>
</template>

<script>
import image1 from "@/assets/images/user_1.png";
import image2 from "@/assets/images/user_2.png";
import image3 from "@/assets/images/user_3.png";

import { Swiper, SwiperSlide } from "swiper/vue";

import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

import CarouselCard from "./CarouselCard.vue";

export default {
  data() {
    return {
      users: [
        {
          image: image1,
          name: "Noor Hussien",
          grade: "Excellent",
          text: "i have very few words for this professional and expert site. the advice and advice for exceeded my expectations",
          rating: 4.5,
        },
        {
          image: image2,
          name: "Ahmed Ali",
          grade: "Good Service",
          text: "Good service with punctuality.Thank you very much, god willing.i will deal with you in the future and talk about you with my friends workers",
          rating: 3.8,
        },
        {
          image: image3,
          name: "Dalal Khaled",
          grade: "The Best",
          text: "The best in the field or management consulting, help me create tables to develop the skils of workers with a method",
          rating: 5,
        },
        {
          image: image1,
          name: "Noor Hussien",
          grade: "Excellent",
          text: "i have very few words for this professional and expert site. the advice and advice for exceeded my expectations",
          rating: 4.5,
        },
        {
          image: image2,
          name: "Ahmed Ali",
          grade: "Good Service",
          text: "Good service with punctuality.Thank you very much, god willing.i will deal with you in the future and talk about you with my friends workers",
          rating: 3.8,
        },
        {
          image: image3,
          name: "Dalal Khaled",
          grade: "The Best",
          text: "The best in the field or management consulting, help me create tables to develop the skils of workers with a method",
          rating: 5,
        },
      ],
      swiperOptions: {
        breakpoints: {
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      },
    };
  },
  components: {
    CarouselCard,
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss">
.swiper-button-prev,
.swiper-button-next {
  top: auto;
  bottom: 0;
  background-color: #ed9419;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  color: white;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 20px;
  font-weight: bold;
}
.swiper-button-prev {
  left: 45%;
  @media (max-width: 599.9px) {
    left: 35%;
  }
  @media (min-width: 600px) and (max-width: 959.9px) {
    left: 40%;
  }
  @media (min-width: 960px) and (max-width: 1279.9px) {
    left: 43%;
  }
}
.swiper-button-next {
  right: 45%;
  @media (max-width: 599.9px) {
    right: 35%;
  }
  @media (min-width: 600px) and (max-width: 959.9px) {
    right: 40%;
  }
  @media (min-width: 960px) and (max-width: 1279.9px) {
    right: 43%;
  }
}
</style>
