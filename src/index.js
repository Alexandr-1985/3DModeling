import timer from "./modules/timer.js";
import menu from "./modules/menu.js";
import modal from "./modules/modal.js";
import validation from "./modules/validCalc.js";
import tabs from "./modules/tabs.js";
import slider from "./modules/slider.js";
import calc from "./modules/calc.js";

menu();
timer("31 december 2021");
modal();
validation();
tabs();
slider({
    sliderClass: "portfolio-content",
    slideClass: "portfolio-item",
    dotClass: "dot",
    sliderActiveClass: "portfolio-item-active",
    dotActiveClass: "dot-active",
    arrowClass: "portfolio-btn",
    arrowNextId: "arrow-right",
    arrowPrevId: "arrow-left",
});
calc(100);