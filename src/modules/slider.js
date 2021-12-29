const slider = ({
    sliderClass,
    slideClass,
    dotClass,
    sliderActiveClass = "slide-active",
    dotActiveClass = "dot-active",
    arrowClass,
    arrowNextId,
    arrowPrevId,
}) => {
    if (!document.querySelector(`.${sliderClass}`)) {
        return;
    } else {
        const sliderBlock = document.querySelector(`.${sliderClass}`);
        const slides = document.querySelectorAll(`.${slideClass}`);
        const portfolioDots = document.querySelector(`.${dotClass}`);
        //console.log(slides);

        let dots = [];
        let currentSlide = 0;
        let interval;

        const creatDot = () => {
            slides.forEach((item, index) => {
                let li = document.createElement("li");
                if (index === 0) {
                    li.className = "dot dot-active";
                } else {
                    li.className = "dot";
                }
                portfolioDots.append(li);
                dots.push(li);
            });
        };
        creatDot();

        let prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        let nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoslide = () => {
            prevSlide(slides, currentSlide, sliderActiveClass);
            prevSlide(dots, currentSlide, dotActiveClass);

            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            nextSlide(slides, currentSlide, sliderActiveClass);
            nextSlide(dots, currentSlide, dotActiveClass);
        };

        let startSlide = () => {
            interval = setInterval(autoslide, 2000);
        };

        startSlide();

        const stopSlide = () => {
            clearInterval(interval);
        };
        sliderBlock.addEventListener("click", e => {
            e.preventDefault();
            if (!e.target.matches(`.${dotClass}, .${arrowClass}`)) {
                return;
            }
            prevSlide(slides, currentSlide, sliderActiveClass);
            prevSlide(dots, currentSlide, dotActiveClass);
            if (e.target.matches(`#${arrowNextId}`)) {
                currentSlide++;
            } else if (e.target.matches(`#${arrowPrevId}`)) {
                currentSlide--;
            } else if (e.target.classList.contains(dotClass)) {
                dots.forEach((dot, index) => {
                    if (e.target === dot) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
            nextSlide(slides, currentSlide, sliderActiveClass);
            nextSlide(dots, currentSlide, dotActiveClass);
        });

        sliderBlock.addEventListener(
            "mouseenter",
            e => {
                if (e.target.matches(`.${dotClass}, .${arrowClass}`)) {
                    stopSlide();
                }
            },
            true
        );
        sliderBlock.addEventListener(
            "mouseleave",
            e => {
                if (e.target.matches(`.${dotClass}, .${arrowClass}`)) {
                    startSlide();
                }
            },
            true
        );
    }
};

export default slider;