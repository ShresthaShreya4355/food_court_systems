const express = require("express");
const router = express.Router();
const customer_controller = require("./Controller/customer_controller");
router.get("/createCustomer",customer_controller.addCustomer);

module.exports = router;