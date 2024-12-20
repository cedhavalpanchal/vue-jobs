import "./assets/main.css";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";
import ConfirmationService from "primevue/confirmationservice";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"; // Theme CSS
import "primevue/resources/primevue.min.css"; // PrimeVue CSS
import "vue-toastification/dist/index.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(router);
app.use(Toast);
app.use(PrimeVue);
app.use(ConfirmationService);
app.mount("#app");
