/*Promises in JavaScript are a powerful tool for handling asynchronous operations.
 They provide a structured way to manage tasks that might take time to complete, 
such as fetching data from a server, reading files, or performing complex calculations.*/

/*const promise = new Promise(function (resolve, reject) {
    console.log("first promise called");
    resolve({ "object": "first" });
});
promise.then((user) => {
    console.log("promise applied");
    console.log(user);

})*/

function sendMessage(message) {
    return new Promise((resolve, reject) => {
        // Simulate sending the message to a server
        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve('Message sent successfully');
            } else {
                reject('Failed to send message');
            }
        }, 1000);
    });
}

// Function to handle the response
sendMessage('Hello, world!')
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });