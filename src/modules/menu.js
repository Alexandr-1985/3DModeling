const menu = () => {
    const menuBtn = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const closeBtn = menu.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul>li>a");
    const serviceBlock = document.querySelector("a[href='#service-block']");

    console.dir(serviceBlock.getAttribute);
    console.log(serviceBlock.getAttribute("href"));

    //фуи для открытия и закрытия меню
    const handleMenu = () => {
        menu.classList.toggle("active-menu");
    };

    menuBtn.addEventListener("click", () => {
        handleMenu();
    });

    closeBtn.addEventListener("click", (event) => {
        event.preventDefault();
        handleMenu();
    });

    const smoothScroll = (a) => {
        let blockId;
        blockId = a.getAttribute("href");
        //плавное передвижение по экрану
        document.querySelector(blockId).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    serviceBlock.addEventListener("click", (event) => {
        event.preventDefault();
        smoothScroll(serviceBlock);
    });

    //выполняем методом forEach
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", (event) => {
            event.preventDefault();
            handleMenu();
            smoothScroll(menuItem);
        });
    });
};

export default menu;