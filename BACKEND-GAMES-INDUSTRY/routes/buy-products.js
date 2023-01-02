const express = require("express");
const router = express.Router();
const usersAuthorization = require("../middleware/authorization");
const { Product } = require("../models/product-validation");

router.delete("/", usersAuthorization, async (req, res) => {
  await Product.deleteMany({});
});

module.exports = router;
