const validation = () => {
    const calcItems = document.querySelectorAll(".calc-item:not(:first-child)");
    const inputsText = document.querySelectorAll("form input[type=text]");
    const inputsEmail = document.querySelectorAll("form input[type=email]");
    const inputsTel = document.querySelectorAll("form input[type=tel]");
    const inputsHoldersTextMess = document.querySelectorAll(
        "form input[placeholder='Ваше сообщение']"
    );

    const allInputsText = [...inputsText, ...inputsHoldersTextMess];

    calcItems.forEach((calcItem) => {
        calcItem.addEventListener("input", () => {
            calcItem.value = calcItem.value.replace(/\D/g, "");
        });
    });

    allInputsText.forEach((inputText) => {
        inputText.addEventListener("input", () => {
            inputText.value = inputText.value.replace(/[^а-яA-Z.\s\-]/gi, "");
        });
        inputText.addEventListener("blur", () => {
            inputText.value = inputText.value
                .replace(/\s+/g, " ")
                .replace(/^\s+/, "")
                .replace(/\s+$/, "")
                .replace(
                    /(^\S|\s\S)(\S+)/g,
                    (str, $1, $2) => $1.toUpperCase() + $2.toLowerCase()
                );
        });
    });

    inputsEmail.forEach((inputEmail) => {
        inputEmail.addEventListener("input", () => {
            inputEmail.value = inputEmail.value.replace(/[^\w0-9\.@!_~*']+/gi, "");
        });
    });

    inputsTel.forEach((inputTel) => {
        inputTel.addEventListener("input", () => {
            inputTel.value = inputTel.value.replace(/[^\d\()\-]/g, "");
        });
    });
};

export default validation;