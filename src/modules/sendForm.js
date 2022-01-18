const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    //оповещение о загрузке, о данны и отправке
    const statusBlock = document.createElement("div");
    //варианты текста
    const loadText = "load...";
    const errorText = "error";
    const successText = "thanks, our manager call you";

    const validate = list => {
        //  console.log(list);
        let success = true;

        /*list.forEach(input => {
if (!input.classList.contains("success")) {
success = false;
}
});
return success;
};*/

        //создаем объект
        /*        let alex = {
name: "Alex",
age: 24,
};*/

        const sendData = data => {
            // return fetch("https://jsonplaceholder.typicode.com/posts", {
            return fetch("./server.php", {
                method: "POST",
                body: JSON.stringify(data),
                //body: data,
                headers: {
                    //"Content-Type": "multipart/form-data",
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
            //вытаскиеваем элемент по идентификатору
            someElem.forEach(elem => {
                const element = document.getElementById(elem.id);
                //console.log(elem);

                if (elem.type === "block") {
                    formBody[elem.id] = element.textContent;
                } else if (elem.type === "input") {
                    formBody[elem.id] = element.value;
                }
            });

            console.log("submit");
            // console.log(form.querySelectorAll("input"));
            //console.log(validate(formElements));
            if (validate(formElements)) {
                //придут обработанные данные от сервера
                sendData({ formBody })
                    .then(data => {
                        statusBlock.textContent = successText;

                        // console.log(data);
                        formElements.forEach(input => {
                            input.value = "";
                        });
                    })
                    .catch(error => {
                        statusBlock.textContent = errorText;
                    });
            } else {
                alert("Данные не валидны");
            }
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
};
export default sendForm;