const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
    console.log('this is user')
    res.json('user');
});
router.post("/register", (req, res) => {
    console.log(req.body);    
    res.json('user2');
});
module.exports = router;