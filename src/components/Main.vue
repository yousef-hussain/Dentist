<template>
  <section class="main">
    <v-container>
      <v-row class="d-flex align-center">
        <v-col style="transform: translateY(15%)">
          <h1 class="title text-uppercase text-white mb-5 fs-header">
            Reserve your template and be ready for holidays
          </h1>
          <p class="description text-white mb-7 mb-sm-12 fs-text">
            Book now appointments to install grillz and visit us in our clinic
            and enjoy the best sessions from friday 10:00 am to 05:00 pm
          </p>
          <v-btn class="btn text-white py-4 px-10 fs-text" size="xl">
            Book Appointment
            <Dialog />
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
.main {
  background-image: url("@/assets/images/bg-main.png");
  background-size: cover;
  background-position: right top;
  position: relative;
  top: 0 !important;
  z-index: 0;

  .v-row {
    height: 100vh;
    @media (max-width: 599.9px) {
      height: 80vh;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgb(41 57 91 / 70%);
  }

  .title {
    width: clamp(300px, 45vw, 900px);
  }

  .description {
    width: clamp(300px, 50vw, 1200px);
  }

  .btn {
    background-color: #ed9419;
    border-radius: 50px;
  }
}
</style>
