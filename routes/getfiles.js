var express = require("express");
var router = express.Router();

// FileSystem
const fs = require("fs");
// directory Path
const path = require("path");

const directoryPath = path.join(__dirname, "../", "/DateTime");

/* GET home page. */
router.get("/", (req, res) => {
  // printing all the files in the directory to console
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    res.send(files);
  });
});

module.exports = router;
