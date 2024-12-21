import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router"; // Імпортуємо маршрути

const app = createApp(App);

app.use(router); // Додаємо маршрути до додатку
app.mount("#app");

