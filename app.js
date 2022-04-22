console.log("hello world! :)");

const express = require("express");
const app = express();
const Product = require('./models/Product.model')
const mongoose = require('mongoose');

// these two lines must be after the lines to get the express application.
// These lines set configuation for handlers
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

mongoose
  .connect("mongodb://localhost/ironborn-ecommerce")
  .then((x) =>
    console.log(
      `Get yourself Connected....you did. Databasename: ${x.connections[0].name}`
    )
  )
  .catch((err) => console.error("errrror error error errror", err));



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
 // res.sendFile(__dirname + "/views/about.html"); // Sends the HTML file
 res.render("about") //using handlebar to render the layout then add the details 
});


//each of these are called a route (app.get)
app.get("/", (req, res, next) => {
  // console.log(req.url)
  console.log("A request on the HOME page was received :)");
  res.render("home")
});

app.get("/contact", (req, res, next) => {
    res.render("contact")
});

app.get("/product1", (req, res, next) => {
  res.sendFile(__dirname + "/views/frog-art-1.html");
});

app.get("/product2", (req, res, next) => {
  res.sendFile(__dirname + "/views/frog-art-2.html");
});

app.get("/product3", (req, res, next) => {
  res.sendFile(__dirname + "/views/frog-art-3.html");
});

// to render a hbs view res.rend("Nameofthehbsfile", info) **the info you want to pass
// app.get("/master-frog", (req, res, next) => {
//   const data = {
//     title: "Master Frog",
//     price: 1111,
//     imageFile: "frog-art-3.jpg",
//   };
//   res.render("product", data);
// });

// app.get("/colourful-frog", (req, res, next) => {
//     const data = {
//       title: "Colourful Frog",
//       price: 555,
//       imageFile: "frog-art-2.webp",
//       sizes: [16,20,24,26],
//     };
//     res.render("product", data);
//   });

//   app.get("/watercolour-frog", (req, res, next) => {
//     const data = {
//       title: "Watercolour Frog",
//       price: 222,
//       imageFile: "watercolour-frog.jpg",
//       sizes: [16,20,24,26]
//     };
//     res.render("product", data);
//   });
  

  app.get("/watercolour-frog", (req, res, next) => {
    Product.findOne({title: "watercolour-frog"})
    .then(productDetails => {
      res.render("product", productDetails);
    })
    .catch(error => console.log("error getting products from DB", error))
  });

  app.get("/colour-frog-print", (req, res, next) => {
    Product.findOne({title: "colour-frog-print"})
    .then(productDetails => {
      res.render("product", productDetails);
    })
    .catch(error => console.log("error getting products from DB", error))
  });

  app.get("/black-and-white-frog-print", (req, res, next) => {
    Product.findOne({title: "black-and-white-frog-print"})
    .then(productDetails => {
      res.render("product", productDetails);
    })
    .catch(error => console.log("error getting products from DB", error))
  });
  
  app.get("/multi-frog-print", (req, res, next) => {
    Product.findOne({title: "multi-frog-print"})
    .then(productDetails => {
      res.render("product", productDetails);
    })
    .catch(error => console.log("error getting products from DB", error))
  });
  
  app.get("/multi-frog-print", (req, res, next) => {
    Product.findOne({title: "multi-frog-print"})
    .then(productDetails => {
      res.render("product", productDetails);
    })
    .catch(error => console.log("error getting products from DB", error))
  });



// tell express to start listening and we can define a port. Can have two arguements, first a port, second a function to action if successful
app.listen(3000, () => {
  console.log("Server listening to requests...");
});
// be careful with this incase you change ports - it is better to store in a variable
