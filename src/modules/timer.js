const timer = (deadLine) => {
    console.log(deadLine);
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");

    console.log(timerHours);
    console.log(timerMinutes);
    console.log(timerSeconds);

    const getTimeRemaining = () => {
        //let deadLine = "16 december 2021";
        let dateStop = new Date(deadLine).getTime();
        let dateNow = new Date().getTime();
        console.log(dateStop);
        console.log(dateNow);
        //колличество милисекунд до deadLine (/1000 - получение секунд)
        let timeRemaining = (dateStop - dateNow) / 1000;
        console.log(timeRemaining);
        //колличество дней оставшихся до deadLine
        //  let days = Math.floor(timeRemaining / 60 / 60 / 24);
        // console.log(days);
        //  let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        console.log(hours);
        console.log(minutes);
        console.log(seconds);

        return {
            timeRemaining,
            hours,
            minutes,
            seconds,
        };
    };

    let getZero = (n) => {
        if (n < 10) return "0" + n;
        return n;
    };

    //обновление таймера
    const updateClock = setInterval(() => {
        let getTime = getTimeRemaining();
        console.log(getTime);
        //заносим время в span
        timerHours.textContent = getZero(getTime.hours);
        timerMinutes.textContent = getZero(getTime.minutes);
        timerSeconds.textContent = getZero(getTime.seconds);

        if (getTime.timeRemaining <= 0) {
            //расчет до 0
            clearInterval(updateClock);
            timerHours.textContent = "00";
            timerHours.style.color = "red";
            timerMinutes.textContent = "00";
            timerMinutes.style.color = "red";
            timerSeconds.textContent = "00";
            timerSeconds.style.color = "red";
        }
    }, 1000);

    //updateClock();
    //getTimeReaining("16 december 2021");
    //setInterval(countTimer, 1000, "16 december 2021");
};

export default timer;