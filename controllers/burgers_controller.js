var express = require("express");
var burger = require("../model/burger");

var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data){ 
    console.log(data)
   })
  res.render("index")
});
  router.post("/api/Burgers", function(req, res) {
    burger.insertOne(
      ["burger_names", "devoured"],
      [req.body.burger_name, req.body.devoured],
      function(result) {
        // Send back the ID of new burger
        res.json({ id: result.insertId });
      }
    );
  });
  router.put("/api/Burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.updateOne({ devoured: req.body.devoured }, condition, function(
      result
    ) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  router.delete("/api/Burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
module.exports = router;