function timer(duration, onComplete) {
    setTimeout(function () {
        onComplete("Timer of " + duration + " ms finished");
    }, duration);
}

function finishMessage(message) {
    console.log(message);
}
timer(2000, finishMessage);
