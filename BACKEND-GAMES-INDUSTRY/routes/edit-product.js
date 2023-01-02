const express = require("express");
const router = express.Router();
const usersAuthorization = require("../middleware/authorization");
const { MainPageProduct } = require("../models/main-page-products-validation");

router.put("/", usersAuthorization, async (req, res) => {
  const isProductExisted = await MainPageProduct.find({ _id: req.body._id });

  if (isProductExisted) {
    await MainPageProduct.updateOne(
      { _id: req.body._id },
      {
        $set: {
          ...req.body,
        },
      }
    );
  }
});

module.exports = router;
