var express = require('express');
var router = express.Router();
const cs = require('cors');
router.use(express.json());
router.use(cs());

/* GET home page. */
router.get('/GetJSON/', function(req, res, next) {
  var data = {Name: 'Nick J. Drake', ID: "1234567"};
  res.send(data);
});

router.get('/GetString/', function(req, res, next) {
  var data = "This is a message, using the GET method, that is a string.";
  res.send(data);
});

router.post("/SendJSON/", cs(), (req, res)=>{
  var theBody = req.body;
  var getName = theBody.Name;
  var getID = theBody.ID;
  console.log("Name from POST: " + getName + "\nID from POST: " + getID);
  res.send("Your JSON object has been printed to the server-side console.")
})

module.exports = router;

