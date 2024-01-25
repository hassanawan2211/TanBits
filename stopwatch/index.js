const clock = document.getElementById("clock");
let timer = null;
let time = 0;

document.querySelector("#btn1").addEventListener("click", () => {
    if (timer === null) {
        timer = setInterval(() => {
            time++;
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            clock.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        }, 1000);
    }
});

document.querySelector("#btn2").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

document.querySelector("#btn3").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    time = 0;
    clock.textContent = "00:00";
});