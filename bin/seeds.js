// we need mongoose

const mongoose = require("mongoose");

// we need the model - to create documents of the product model

const Product = require("../models/Product.model");

//because we are going to create documents we need to connect to the databasename

mongoose
  .connect("mongodb://localhost/ironborn-ecommerce")
  .then((x) =>
    console.log(
      `Get yourself Connected....you did. Databasename: ${x.connections[0].name}`
    )
  )
  .catch((err) => console.error("errrror error error errror", err));

const products = [
  {
    title: "colour-frog-print",
    price: 8465,
    imgScr: "watercolour-frog.jpg"
  },
  {
    title: "black-and-white-frog-print",
    price: 5545,
    imgScr: "posh-frog.jpg"
  },
  {
    title: "multi-frog-print",
    price: 4123,
  },
  {
    title: "sleppy-frog",
    price: 6844,
    hasStock: false,
    catergories: ["limited edition"],
  },
];

Product.insertMany(products)
  .then((response) => {
    console.log(` ${response.length} products created!`);
    console.log(response);
  })
  .catch((err) => {
    console.log("error creating products in DB");
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
