const express = require('express');
const router = express.Router();
const Ecom_new_product = require('../Models/New_product_model');

router.get('/new_product', async (req, res) => {
    try {
      console.log("Fetching new products...");
      const ecom_new_product = await Ecom_new_product.findAll();
      console.log("Retrieved new products:", ecom_new_product.every(ecom_new_product => ecom_new_product instanceof Ecom_new_product ));
      console.log("All users:", JSON.stringify(ecom_new_product, null, 2));
      res.json(ecom_new_product);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


  module.exports = router;
