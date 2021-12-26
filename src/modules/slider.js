const slider = () => {
    const sliderBlock = document.querySelector(".portfolio-content");
    const slides = document.querySelectorAll(".portfolio-item");
    const dots = document.querySelectorAll(".dot");

    let timeInterval = 2000;
    let currentSlide = 0;
    let interval;

    const prevSlide = (elens, index, strClass) => {
        elens[index].classList.remove(strClass);
    };

    const nextSlide = (elens, index, strClass) => {
        elens[index].classList.add(strClass);
    };

    const autoslide = () => {
        prevSlide(slides, currentSlide, "portfolio-item-active");
        prevSlide(dots, currentSlide, "dot-active");
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, "portfolio-item-active");
        nextSlide(dots, currentSlide, "dot-active");
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoslide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target);

        //ограничитель
        if (!e.target.matches(".dot, .portfolio-btn")) {
            //console.log(1);
            return;
        }

        prevSlide(slides, currentSlide, "portfolio-item-active");
        prevSlide(dots, currentSlide, "dot-active");

        if (e.target.matches("#arrow-right")) {
            console.log("arrow-right");
            currentSlide++;
        } else if (e.target.matches("#arrow-left")) {
            console.log("arrow-left");
            currentSlide--;
        } else if (e.target.classList.contains("dot")) {
            console.log("dot");
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, "portfolio-item-active");
        nextSlide(dots, currentSlide, "dot-active");
    });

    sliderBlock.addEventListener(
        "mouseenter",
        (e) => {
            //ограничитель
            if (e.target.matches(".dot, .portfolio-btn")) {
                //  console.log(e.target);
                stopSlide(timeInterval);
            }
        },
        true
    );
    sliderBlock.addEventListener(
        "mouseleave",
        (e) => {
            //ограничитель
            if (e.target.matches(".dot, .portfolio-btn")) {
                // console.log(e.target);
                startSlide(timeInterval);
            }
        },
        true
    );

    startSlide();
};

export default slider;