var express = require("express");
var router = express.Router();

// FileSystem
const fs = require("fs");
// directory Path
const path = require("path");

// check and create directory if it doesn't exist
var dir = "./DateTime";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const directoryPath = path.join(__dirname, "../", "/DateTime");

/* GET users listing. */
router.post("/", (req, res) => {
  // current datetime
  let datetime = new Date();

  let date =
    datetime.getDate() +
    "-" +
    (datetime.getMonth() + 1) +
    "-" +
    datetime.getFullYear();
  let time =
    datetime.getHours() +
    "-" +
    datetime.getMinutes() +
    "-" +
    datetime.getSeconds();

  let filename = date + " " + time;

  // writing current datetime to text file
  fs.writeFileSync(
    directoryPath + "/" + filename + ".txt",
    datetime.toString()
  );

  res.send("File Created Successfully");
});

module.exports = router;
