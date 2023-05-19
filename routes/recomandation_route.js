const { default: axios } = require("axios");
const express = require("express");
const recommendationRoute = express.Router();
const ProductItem = require("../models/product_item_model");
const ProductCategory = require("../models/product_category_model");

recommendationRoute.route("/get-all").post((req, res) => {
  const { userId } = req.body;

  axios
    .get(
      `https://solor-project.herokuapp.com/recommendation-load/${userId}?num_of_rec=5`
    )
    .then((response) => {
      const { recommendations } = response.data;

      const foodPromises = recommendations.map((id) => {
        return ProductItem.findById(id).exec();
      });

      Promise.all(foodPromises)
        .then((results) => {
          const categoryIds = results.map((val) => val.category.toString());
          const uniqueSet = new Set(categoryIds);
          const uniqueArray = Array.from(uniqueSet);

          const categoryPromises = uniqueArray.map((id) => {
            return ProductCategory.findById(id).exec();
          });

          Promise.all(categoryPromises)
            .then((categoryResult) => {
              res.send({ items: results, categories: categoryResult });
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure-ml" });
    });
});

module.exports = recommendationRoute;
