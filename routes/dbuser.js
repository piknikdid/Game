const express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs("mongodb://pika:A1qwert@ds135690.mlab.com:35690/user", ["dbusers","heroes"]);


router.get('/users', function (req, res, next) {
  db.dbusers.find(function (err,users) {
    if (err){
      res.send(err);
    }
    res.send(users);
  });
});

router.get('/heroess', function (req, res, next) {
  db.heroes.find(function (err,heroes) {
    if (err){
      res.send(err);
    }
    res.send(heroes);
  });
});

router.get('/user/:id', function (req, res, next) {
  db.dbusers.findOne({_id:mongojs.ObjectId(req.params.id)},function (err, user) {
    if (err){
      res.send(err);
    }
    res.json(user);
  });

});


router.post('/user', function(req, res, next){
    var user = req.body;
    if(!user.email || !user.password)
        {
            res.status(400);
            res.json({
                "error" : "Bad Data"
            });
        } else {
            db.dbusers.save(user, function(err, user){
                if (err){
                    res.send(err);
                }
                res.json(user);
            });
        }
})

module.exports = router;
