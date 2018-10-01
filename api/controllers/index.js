var express = require('express');
var router = express.Router();
router.use("/product", require(__dirname + "/products"));
router.use("/user", require(__dirname + "/user"));
router.get("/",(req,res)=>{
    res.json('router worked');
});
module.exports = router;
