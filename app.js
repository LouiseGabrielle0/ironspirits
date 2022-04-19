console.log("hello world! :)");

const express = require("express");

const app = express();

//configure a directory for static files
app.use(express.static("public")); // we can use this to give the public access to images - they use the url localhost:3000/images/filename.png

// whenever you received a get request write this code
// two arguments - first path where we recieve the code and the second is the code to execute
// app.get(path,code)
// an example of how it is normally used -
// app.get(".about", (request, response, next) => {})

app.get("/about", (req, res, next) => {
 // console.log(req.url)
  console.log("A request on the ABOUT page was received :)");
  res.sendFile(__dirname + '/views/about.html'); // Sends the HTML file
});

app.get("/", (req, res, next) => {
    // console.log(req.url)
    console.log("A request on the HOME page was received :)");
    res.sendFile(__dirname + '/views/home.html');;
  });
  

app.get("/contact", (req, res, next) => {
  res.sendFile(__dirname + '/views/contact.html');
});

app.get("/contact", () => {});

// tell express to start listening and we can define a port. Can have two arguements, first a port, second a function to action if successful
app.listen(3000, () => {
  console.log("Server listening to requests...");
});
// be careful with this incase you change ports - it is better to store in a variable
