import { Router } from "./router.js";

const router = new Router;
router.add("/", "/pages/home.html");
router.add("/universo", "/pages/universo.html");
router.add("/exploracao", "/pages/exploracao.html");
router.add(404, "/pages/404.html");

router.addBackGround("/", "/images/mountains-universe-1.png");
router.addBackGround("/universo", "/images/mountains-universe02.png");
router.addBackGround("/exploracao", "/images/mountains-universe-3.png");


router.handle();

window.route = () => router.route();
window.onpopstate = () => router.handle();