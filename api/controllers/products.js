const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
    console.log('this is product')
    res.json('products');
});
module.exports = router;