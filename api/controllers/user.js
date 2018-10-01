const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
    console.log('this is user')
    res.json('user');
});
module.exports = router;