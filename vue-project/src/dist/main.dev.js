"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

require("./assets/main.css");

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Імпортуємо маршрути
var app = (0, _vue.createApp)(_App["default"]);
app.use(_router["default"]); // Додаємо маршрути до додатку

app.mount("#app");
//# sourceMappingURL=main.dev.js.map
