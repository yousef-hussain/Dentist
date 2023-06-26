/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

// global style
import "@/assets/globalStyle.css";

// swiper
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

// global component
import Dialog from "@/components/Dialog.vue";

const app = createApp(App);

registerPlugins(app);

app.component("Dialog", Dialog);

app.mount("#app");
