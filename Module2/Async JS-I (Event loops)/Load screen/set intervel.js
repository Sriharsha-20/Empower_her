let counter = 0;

let loadingId = setInterval(function () {
    console.log("Loading....");
    counter++;

    if (counter === 5) {
        clearInterval(loadingId);
        console.log("Loaded successfully!");
    }
}, 1000);
