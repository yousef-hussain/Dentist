<template>
  <footer>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <h2 class="text-uppercase fs-title">
            INFORMATION
          </h2>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-btn :elevation="0" class="fs-text" height="auto">
                {{ item }}
                <Dialog />
              </v-btn>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="4">
          <h2 class="text-uppercase mb-10 fs-title">
            Subscribe to our newsletter!
          </h2>
          <v-text-field placeholder="Enter Your Email" hide-details style="height: 50px;" class="mb-7">
            <template #append>
              <v-btn :elevation="0" color="primary">Subscribe </v-btn>
            </template>
          </v-text-field>
          <p class="fs-text">
            © 2022 custom grills. all rights reserved
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <h2 class="text-uppercase mb-5 fs-title">
            CONNECT WITH US
          </h2>
          <div class="icons d-flex justify-space-between">
            <!-- <v-btn :append-icon="icon" rounded="xl" v-for="(icon, index) in icons" :key="index" style="font-size: var(--fs-text);"></v-btn> -->
            <a :href="icon.link" v-for="(icon, index) in icons" :key="index" class="pa-4" style="background-color: #E8E8E8;  border-radius: 50%;">
              <v-icon :icon="icon.icon"  style="font-size: 30px;"></v-icon>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      items: ["Contact", "FAQ", "Terms & Conditions", "Privacy Policy"],
      icons: [
        {
          icon: 'mdi-facebook',
          link: "https://ar-ar.facebook.com/",
        },
        {
          icon: 'mdi-instagram',
          link: "https://www.instagram.com/",
        },
        {
          icon: 'mdi-twitter',
          link: "https://twitter.com/?lang=ar",
        },
        {
          icon: 'mdi-linkedin',
          link: "https://www.linkedin.com/",
        },
      ]
    };
  },
};
</script>