const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const popup = document.querySelector(".popup");

    //оповещение о загрузке, о данных и отправки
    const statusBlock = document.createElement("div");
    statusBlock.style.color = "white";
    //варианты текста
    const loadText = "load...";
    const errorText = "error";
    const successText = "thanks, our manager call you";

    const sendData = data => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll("input");

        //создаем экземпляр formData и предаем нашу форму
        const formData = new FormData(form);
        const formBody = {};

        //отображение блока с ответом
        statusBlock.textContent = loadText;
        form.append(statusBlock);

        //создаем пустой обхект и перебираем data
        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        //придут обработанные данные от сервера
        sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText;
                statusBlock.style.color = "red";
                formElements.forEach(input => {
                    input.value = "";
                });
                setTimeout(() => {
                    statusBlock.textContent = "";
                }, 2000);
                setTimeout(() => {
                    popup.style.display = "none";
                }, 2000);
            })
            .catch(error => {
                statusBlock.textContent = errorText;
            });
    };

    try {
        if (!form) {
            throw new Error("Верните форму на место");
        }

        form.addEventListener("submit", event => {
            event.preventDefault();

            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
};
export default sendForm;