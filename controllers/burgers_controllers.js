var express = require("express");

var router = express.Router();

//var orm = require("../config/orm.js");

// Import the model (burger.js) to use its database functions.
var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
    burgers.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burgers.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(data) {
        // Send back the ID of the new quote
        res.json({ id: res.insertId });

        //res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", req.body.devoured);

    burgers.update({
        devoured: req.body.devoured
    }, condition, function(data) {
        console.log(data.affectedRows);
            if (data.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
    });

});



module.exports = router;