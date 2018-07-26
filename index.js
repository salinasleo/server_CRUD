const http = require('http');
const PORT_1 = 7000;
const PORT_2 = 7500;

const handleRequest = (request, response) => {
    response.end("Hey, you sent me a request. " + request.url);
};

const server_1 = http.createServer(handleRequest);
const server_2 = http.createServer(handleRequest);

server_1.listen(PORT_1, function() {
    console.log(`Server listening on port ${PORT_1}.`);
    console.log('You are so good looking');
});

console.log(`max listeners on ${PORT_1} is: ${server_1.getMaxListeners()}`);
console.log(`address of ${PORT_1} is: ${server_1.address().AddressInfo}`);
console.log(`max listeners on ${PORT_2} is: ${server_2.getMaxListeners()}`);
console.log(`address of ${PORT_2} is: ${server_2.address()}`);




server_2.listen(PORT_2, function() {
    console.log(`Server listening on port ${PORT_2}.`);
    console.log('Your breath stinks');
});


// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// **Bonus**

// * Look for other ways to expand what your server can do. As possibilities:
//   * Generate the good/bad phrase randomly from a list of predefined phrases
//   * Use the `twitter` package inside the response to also return a random tweet