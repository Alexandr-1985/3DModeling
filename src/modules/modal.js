const modal = () => {
    const modal = document.querySelector(".popup");
    const buttons = document.querySelectorAll(".popup-btn");
    const closeBtn = modal.querySelector(".popup-close");
    const MOBILE_WIDTH = 768;

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            document.documentElement.clientWidth > MOBILE_WIDTH ?
                showModal() :
                (modal.style.display = "block"); //окно открылось
        });
    });

    closeBtn.addEventListener("click", () => {
        document.documentElement.clientWidth > MOBILE_WIDTH ?
            closeModal() :
            (modal.style.display = "none"); //закрывает
    });

    const showModal = () => {
        let count = 0;
        let idInterval;
        modal.style.display = "block";
        const fadeIn = () => {
            count += 5;
            if (count <= 1) {
                idInterval = requestAnimationFrame(fadeIn);
                modal.style.opacity = `${count}`;
            } else {
                cancelAnimationFrame(idInterval);
            }
        };
        fadeIn();
    };

    const closeModal = () => {
        let count = 0;
        let idInterval;
        //modal.style.display = "none";
        const fadeOut = () => {
            count -= 0.5;
            if (count >= 0) {
                idInterval = requestAnimationFrame(fadeOut);
                modal.style.opacity = `${count}`;
            } else {
                cancelAnimationFrame(idInterval);
                modal.style.display = "none";
            }
        };
        fadeOut();
    };
};

export default modal;