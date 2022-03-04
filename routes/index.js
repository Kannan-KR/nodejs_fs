var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(
    "Please use /createfile to create a file; use /getfiles to get a list of all files"
  );
});

module.exports = router;
