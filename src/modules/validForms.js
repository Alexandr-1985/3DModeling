const validForm = () => {
    const getBtn = bool => {
        const allBtn = document.querySelectorAll(".form-btn");
        allBtn.forEach(item => {
            item.disabled = bool;
        });
    };
    const checkData = () => {
        const form = document.querySelectorAll("form");
        form.forEach(item => {
            item.addEventListener("focusout", e => {
                let target = e.target;
                if (target.placeholder === "Ваше имя") {
                    target.value = target.value.trim().replace(/[^\s\d\a-zа-я]/gi, "");
                    if (target.value.search(/[^A-Za-z]/)) {
                        target.value = "";
                        target.style.border = "2px solid red";
                    } else {
                        target.style.border = "2px solid green";
                    }
                } else if (
                    target.placeholder === "E-mail" ||
                    target.placeholder === "Ваш E-mail"
                ) {
                    target.required = true;
                    target.value = target.value.replace(/[^\w\s+@\-.]|(.)(?=\1)/gi, "");
                    if (target.value) {
                        target.style.border = "2px solid green";
                    } else {
                        target.value = "";
                        target.style.border = "2px solid red";
                    }
                } else if (
                    target.placeholder === "Номер телефона" ||
                    target.placeholder === "Ваш номер телефона"
                ) {
                    if (target.value.length !== 18) {
                        target.style.border = "2px solid red";
                        getBtn(true);
                    }
                    if (target.value.length === 15) {
                        target.style.border = "2px solid green";
                        getBtn(false);
                    }
                }
            });
        });
    };
    checkData();
};

export default validForm;