<template>
  <v-app-bar :elevation="0" :height="100">
    <v-container>
      <v-row class="align-center">
        <v-col cols="3">
          <v-img
            src="@/assets/images/LogoCompany.png"
            class="ma-0 logo-company"
          ></v-img>
        </v-col>
        <v-col class="d-none d-lg-block">
          <v-text-field type="text" bg-color="white" hide-details rounded="lg">
            <template #prepend-inner>
              <v-btn prepend-icon="mdi-magnify"></v-btn>
            </template>
          </v-text-field>
        </v-col>
        <v-col class="d-flex flex-row-reverse">
          <v-app-bar-nav-icon
            @click="drawer = !drawer"
            class="d-block d-lg-none"
            color="white"
            width="auto"
            height="auto"
          ></v-app-bar-nav-icon>
          <v-btn
            v-for="(item, index) in buttons"
            :key="index"
            :prepend-icon="item.icon"
            color="white"
            class="header-icon font-weight-regular"
            >{{ item.text }}
            <Dialog />
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="top"
    class="h-auto"
    :elevation="0"
    :style="`backgroundColor: ${bgNavbar};`"
  >
    <v-list
      class="d-flex flex-column flex-lg-row  justify-center text-uppercase text-center"
    >
      <v-list-item
        v-for="(item, index) in itemsNav"
        :key="index"
        class="ma-3 font-weight-bold"
        style="color: white"
        >{{ item }}</v-list-item
      >
      <v-list-item class="d-block d-lg-none" >
        <v-text-field
          type="text"
          bg-color="grey"
          hide-details
          rounded="lg"
          class="w-75 w-md-50 ma-auto"
        >
          <template #prepend-inner>
            <v-btn>
              <v-icon icon="mdi-magnify"></v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      itemsNav: ["home", "about us", "grills", "blog", "contact"],
      bgNavbar: "transparent",
      buttons: [
        {
          text: "Cart",
          icon: "mdi-cart",
        },
        {
          text: "My Account",
          icon: "mdi-account",
        },
        {
          text: "EN",
          icon: "mdi-menu-down",
        },
      ],
    };
  },
  created() {
    if (this.$vuetify.display.mdAndDown) {
      this.drawer = false;
      this.bgNavbar = "#29395bcc";
    }
  },
};
</script>

<style lang="scss" scoped>
.v-toolbar {
  height: clamp(80px, 9vw, 130px);
}
.v-navigation-drawer {
  border-bottom: unset;
  top: 17% !important;
  @media (max-width: 1279.9px ) {
    top: 10% !important;
  }
}

.v-app-bar.v-toolbar {
  background-color: #29395b;
  .logo-company {
    width: clamp(120px, 20vw, 200px);
  }

  .header-icon {
    @media (max-width: 599.9px) {
      font-size: 10px;
      padding: 0 5px;
    }
    @media (min-width: 600px) and (max-width: 959.9px) {
      font-size: 13px;
      padding: 0 7px;
    }
    @media (min-width: 960px) and (max-width: 1279.9px) {
      font-size: 16px;
    }
    @media (min-width: 1280px) and (max-width: 1919.9px) {
      font-size: 17px;
    }
    @media (min-width: 1920px) and (max-width: 2559.9px) {
      font-size: 20px;
    }
    @media (min-width: 2560px) {
      font-size: 25px;
    }
  }
}

.v-list-item {
  @media (max-width: 599.9px) {
    font-size: 12px;
    padding: 0 7px;
  }
  @media (min-width: 600px) and (max-width: 959.9px) {
    font-size: 15px;
  }
  @media (min-width: 960px) and (max-width: 1279.9px) {
    font-size: 16px;
  }
  @media (min-width: 1280px) and (max-width: 1919.9px) {
    font-size: 16px;
  }
  @media (min-width: 1920px) and (max-width: 2559.9px) {
    font-size: 20px;
  }
  @media (min-width: 2560px) {
    font-size: 30px;
  }
}
</style>
