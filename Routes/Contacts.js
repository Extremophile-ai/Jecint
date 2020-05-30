var express                = require("express");
var router                 = express.Router();
var db                     = require("../Models/Index");




// show all messages
router.get("/", function(req, res){
    db.Contact.find({}, function(err, contacts){
        if(err){
            console.log(err)
            res.redirect("/contact")
        } else{
            res.json(contacts)
        }
    });
});

// Create message
router.post("/create", function(req, res){
    var name    = req.body.name;
    var email   = req.body.email;
    var message = req.body.message;
    console.log(req.body);
    db.Contact.create(req.body, function(err, newContact){
        if(err){
            console.log(err);
            res.redirect("/create");
        } else{
            res.redirect("/end");
            // res.status(201).json(newContact);
        }
    })
});

// show more about a contact

router.get("/:Id", function(req, res){
    db.Contact.findById(req.params.id)
        if(err){
            res.status(error.response.status)
            return res.send(error.message);
        } else{
            res.json(foundContact)
        }
    });


module.exports = router;