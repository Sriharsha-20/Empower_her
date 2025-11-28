function displayMessage(name) {
    console.log(`Hello, ${name}!`);
}

function getUserInput(callback) {
    setTimeout(function () {
        let username = "Harsha";  
        callback(username);      
    }, 1000);
}
getUserInput(displayMessage);
