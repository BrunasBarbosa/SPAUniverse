import { Router } from "./router.js";
import Path from "./routes.js";

const router = new Router();
const path = new Path();

router.add("", "/pages/home.html");
router.add("#/home", "/pages/home.html");
router.add("#/universe", "/pages/universe.html");
router.add("#/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => {
  path.routeChange()
  router.handle()
};

window.route = () => {
  router.route()
  path.routeChange()
};

window.addEventListener('hashchange', path.routeChange);
window.addEventListener('load', path.routeChange);