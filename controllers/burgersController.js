var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };

    console.log("banana: ", data);
    res.render("index", {
      burgers: data
    });
  });
});

router.post("/api/burgers", function(req, res) {
  burgers.create([
    "burger_name"
  ], [
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition =  req.params.id;

  console.log("condition", condition);

  burgers.update({
    devoured: 1
  }, req.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = req.params.id;
  console.log("****",condition);

  burgers.delete(req.params.id, function(result) {
    console.log("****",result);
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      console.log("-----", result);
      res.json(result);
      // res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
