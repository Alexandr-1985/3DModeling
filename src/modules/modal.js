import animate from "./animate";

const modal = () => {
    const modal = document.querySelector(".popup");
    const buttons = document.querySelectorAll(".popup-btn");
    const MOBILE_WIDTH = 768;

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            showModal();
        });
    });

    const showModal = () => {
        if (document.documentElement.offsetWidth >= MOBILE_WIDTH) {
            animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.display = "block";
                    modal.style.opacity = progress;
                },
            });
        }
        modal.style.display = "none";
    };

    const closeModal = () => {
        if (document.documentElement.offsetWidth >= MOBILE_WIDTH) {
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.display = "block";
                    modal.style.opacity = 1 - progress;
                    if (progress === 1) {
                        modal.style.display = "none";
                    }
                },
            });
        }
        //console.log("out");
        modal.style.display = "none";
    };

    modal.addEventListener("click", e => {
        if (!e.target.closest(".popup-content") ||
            e.target.classList.contains("popup-close")
        ) {
            closeModal();
        }
    });
};

export default modal;