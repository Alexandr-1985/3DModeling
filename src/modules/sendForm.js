const sendForm = idForm => {
    const form = document.getElementById("idForm");

    //создаем объект
    let alex = {
        name: "Alex",
        age: 24,
    };

    const sendData = data => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            //body: data,
            headers: {
                //"Content-Type": "multipart/form-data",
                "Content-Type": "application/json",
            },
        }).then(res => res.json());
    };

    form.addEventListener("submit", event => {
        event.preventDefault();
        //создаем экземпляр formData и предаем нашу форму
        const formData = new FormData(form);

        const formBody = {};
        //создаем пустой обхект и перебираем data
        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        console.log("submit");

        //придут обработанные данные от сервера
        sendData({ formBody }).then(data => {
            console.log(data);
        });
    });
};

export default sendForm();