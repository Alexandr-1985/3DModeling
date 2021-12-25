const menu = () => {
    const menu = document.querySelector("menu");
    const main = document.querySelector("main");
    //const body = document.querySelector("body");

    //фуи для открытия и закрытия меню
    const handleMenu = () => {
        menu.classList.toggle("active-menu");
    };

    const smoothScroll = (a) => {
        let blockId;
        blockId = a.getAttribute("href");
        //плавное передвижение по экрану
        document.querySelector(blockId).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    main.addEventListener("click", (e) => {
        const target = e.target;
        if (target.closest(".menu")) {
            handleMenu();
        } else if (target.closest('a[href="#service-block"]')) {
            e.preventDefault();
            console.log(target);
            smoothScroll(target.closest('a[href="#service-block"]'));
        } else if (menu.classList.contains("active-menu") && target !== menu) {
            handleMenu();
        }
    });

    menu.addEventListener("click", (e) => {
        const target = e.target;
        if (target.closest(".close-btn")) {
            e.preventDefault();
            handleMenu();
        } else if (target.closest("a")) {
            e.preventDefault();
            handleMenu();
            smoothScroll(target);
        }
    });
    /*
      //listner menu on all body 
        body.addEventListener("click", (e) => {
            const target = e.target;
            console.log(target);
            if (target.closest(".menu")) {
                handleMenu();
            } else if (target.closest(".close-btn")) {
                e.preventDefault();
                handleMenu();
            } else if (
                target.closest('a[href="#service-block"]') &&
                !target.closest("menu")
            ) {
                e.preventDefault();
                console.log(target);
                smoothScroll(target.closest('a[href="#service-block"]'));
            } else if (target.closest("a") && target.closest("menu")) {
                e.preventDefault();
                handleMenu();
                smoothScroll(target);
            } else if (menu.classList.contains("active-menu") && target !== menu) {
                handleMenu();
            }
        });*/
};

export default menu;