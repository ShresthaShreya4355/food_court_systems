const express = require('express');
const bodyparser = require("body-parser");
const app = express();

//Routers
const CustomerRoute = require("./Route/customer_router");
const TripRoute = require("./routers/tripRoute");

//parse json data in form body client UI
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())

app.use(express.json());
app.use(CustomerRoute);

app.listen(3000);