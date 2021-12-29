const slider = () => {
    const sliderBlock = document.querySelector(".portfolio-content");
    const slides = document.querySelectorAll(".portfolio-item");
    const portfolioDots = document.querySelector(".portfolio-dots");
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
        prevSlide(slides, currentSlide, "portfolio-item-active");
        prevSlide(dots, currentSlide, "dot-active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, "portfolio-item-active");
        nextSlide(dots, currentSlide, "dot-active");
    };

    let startSlide = () => {
        interval = setInterval(autoslide, 2000);
    };

    startSlide();

    const stopSlide = () => {
        clearInterval(interval);
    };
    sliderBlock.addEventListener("click", (e) => {
        e.preventDefault();
        if (!e.target.matches(".dot, .portfolio-btn")) {
            return;
        }
        prevSlide(slides, currentSlide, "portfolio-item-active");
        prevSlide(dots, currentSlide, "dot-active");
        if (e.target.matches("#arrow-right")) {
            currentSlide++;
        } else if (e.target.matches("#arrow-left")) {
            currentSlide--;
        } else if (e.target.classList.contains("dot")) {
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
        nextSlide(slides, currentSlide, "portfolio-item-active");
        nextSlide(dots, currentSlide, "dot-active");
    });

    sliderBlock.addEventListener(
        "mouseenter",
        (e) => {
            if (e.target.matches(".dot, .portfolio-btn")) {
                stopSlide();
            }
        },
        true
    );
    sliderBlock.addEventListener(
        "mouseleave",
        (e) => {
            if (e.target.matches(".dot, .portfolio-btn")) {
                startSlide();
            }
        },
        true
    );
};

export default slider;