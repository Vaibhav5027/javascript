

document.querySelector("#start").addEventListener("click", function () {
    console.log("start button clicked");



    function changeColor() {
        let colorcode = "0123456ABCEFG";
        let color = "#";
        let intervalId;
        for (let i = 0; i < 6; i++) {
            color += colorcode[Math.floor(Math.random() * 10)]
        }
        console.log(color)
        document.body.style.backgroundColor = color;
        return color;
    }

    intervalId = setInterval(changeColor, 1000); // Change color every second

    // setTimeout(() => {
    //     clearInterval(intervalId); // Stop the interval after 10 seconds
    // }, 10000);

    document.querySelector("#stop").addEventListener("click", function () {
        clearInterval(intervalId)
    })
});
