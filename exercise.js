// # **Instructions**

// * Create a website with four routes:
//   * Home
//   * Favorite Foods
//   * Favorite Movies
//   * Favorite CSS Frameworks
// * Each route should be triggered by a different URL.
// * Each route should display an HTML page listing your favorite three things of each.
// * Be sure to use `fs` to serve your HTML files.

// ## Bonuses
// * Have your home page have links to all of your other pages.
// * DRY up your code by only having a single `readFile`

const http = require('http');
const fs = require('fs');
const PORT_1 = 8080;
const chinesePickUpLines = ["Your skin smells like the moon", "I'm going to tel Xi Jinping to scold you.", "I would rather cry in a BMW than smile on a bicycle."];

const displayHome = (req, res) => {
    fs.readFile(__dirname + "/views/home.html", function (err, contents) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(contents);
    });
};

const displayMovies = (req, res) => {
    fs.readFile(__dirname + "/views/movies.html", function (err, contents) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(contents);
    });
};

const displayFoods = (req, res) => {
    fs.readFile(__dirname + "/views/foods.html", function (err, contents) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(contents);
    });
};

const displayCss= (req, res) => {
    fs.readFile(__dirname + "/views/css.html", function (err, contents) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(contents);
    });
};

const handleRequest = (request, response) => {
    const path = request.url;
    const phrase = chinesePickUpLines[Math.floor(Math.random() * chinesePickUpLines.length)];
    console.log(path);
    
    switch (path) {
        case "/":
        case "/home":
            displayHome(request, response);
            break;
        case "/movies":
            displayMovies(request, response);
            break;
        case "/foods":
            displayFoods(request, response);
            break;
        case "/css":
            displayCss(request, response);
            break;
        default:
            response.writeHead(404);
            response.end();
            break;
    };
};

const server_1 = http.createServer(handleRequest);

server_1.listen(PORT_1, function() {
    console.log(`Server listening on port: ${PORT_1}.`);
});