var express = require("express");

var router = express.Router();
// var burger = require("../models/burger");

var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// router.get("/burgers", function(req, res) {
//   // express callback response by calling burger.selectAllBurger
//   burger.all(function(data) {
//     // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
//     var hbsObject = { burgers: data };
//     res.render("index", hbsObject);
//   });
// });

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
    
    db.Burger.findAll(
    { 
      where: {},    
    }).then(function(data) {
      var hbsObject = { burgers: data };
      res.render("index", hbsObject);
    });

});

// post route -> back to index
// router.post("/burgers/create", function(req, res) {
//   // takes the request object using it as input for buger.addBurger
//   burger.create(req.body.burger_name, function(result) {
//     // wrapper for orm.js that using MySQL insert callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     res.redirect("/");
//   });
// });

// post route -> back to index
router.post("/burgers/create", function(req, res) {

  db.Burger.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });

    res.redirect("/");
  
});


// // put route -> back to index
// router.put("/burgers/update", function(req, res) {
//   burger.update(req.body.burger_id, function(result) {
//     // wrapper for orm.js that using MySQL update callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     res.redirect("/");
//   });
// });

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  console.log(req.body)
  db.Burger.update(
      {
        devoured: true
      },
      {
        where: {
          id: req.body.burger_id
        }
      }).then(function(dbPost) {
        // res.json(dbPost);
    
    });

    res.redirect("/");
  });

module.exports = router;
