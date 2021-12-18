const menu = () => {
    const menuBtn = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const closeBtn = menu.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul>li>a");

    console.log(menuBtn);

    //фуи для открытия и закрытия меню
    const handleMenu = () => {
        // if (!menu.style.transform) {
        //     menu.style.transform = `translateX(0)`;
        // } else {
        //     menu.style.transform = ``;
        // }

        //toggle проверяет, есть ли на элементе класс (закроет/ откроет)
        menu.classList.toggle("active-menu");
    };
    menuBtn.addEventListener("click", () => {
        // console.dir(menu.style.transform);
        handleMenu();
    });

    closeBtn.addEventListener("click", handleMenu);

    //вариант перебора коллекции menuItems
    // for (let i = 0; i < length.menuItems; i++) {
    // menuItems[i].addEventListener("click", handleMenu);
    // }

    //выполняем методом forEach
    menuItems.forEach((menuItem) =>
        menuItem.addEventListener("click", handleMenu)
    );
};

export default menu;