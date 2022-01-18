import timer from "./modules/timer.js";
import menu from "./modules/menu.js";
import modal from "./modules/modal.js";
import validation from "./modules/validCalc.js";
import tabs from "./modules/tabs.js";
import slider from "./modules/slider.js";
import calc from "./modules/calc.js";
import sendForm from "./modules/sendForm.js";

menu();
timer("31 december 2022");
modal();
validation();
tabs();
slider({
    sliderClass: "portfolio-content",
    slideClass: "portfolio-item",
    dotsClass: "portfolio-dots",
    dotClass: "dot",
    sliderActiveClass: "portfolio-item-active",
    dotActiveClass: "dot-active",
    arrowClass: "portfolio-btn",
    arrowNextId: "arrow-right",
    arrowPrevId: "arrow-left",
});
calc(100);
sendForm({
    formId: "form1",
    someElem: [{ type: "block", id: "total" }],
});