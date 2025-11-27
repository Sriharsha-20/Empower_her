let seconds = parseInt(prompt("Enter seconds to countdown:"), 10);

let intervalId = setInterval(() => {
    console.log("Time left:", seconds);

    if (seconds === 0) {
        clearInterval(intervalId);
        console.log("Countdown Complete!");
    } else {
        seconds--;
    }
}, 1000);

function checkStopKey() {
    setTimeout(() => {
        let input = prompt("Press 's' to stop the countdown (or wait):");

        if (input === "s") {
            clearInterval(intervalId);
            console.log("Countdown Stopped by User!");
        } else {
            if (seconds > 0) {
                checkStopKey();
            }
        }
    }, 1000);
}

checkStopKey();