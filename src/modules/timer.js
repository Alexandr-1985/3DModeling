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

    //обновление таймера
    const updateClock = () => {
        let getTime = getTimeRemaining();
        console.log(getTime);
        //заносим время в span
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;

        if (timeRemaining > 0) {
            //расчет до 0
            setTimeout(updateClock, 1000);
        }
    };

    updateClock();
    //getTimeReaining("16 december 2021");
    //setInterval(countTimer, 1000, "16 december 2021");
};

export default timer;