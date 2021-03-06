var MongoClient = require('mongodb').MongoClient;
var dbURL = 'mongodb://localhost:27017/fitusDB';
var assert = require('assert');
var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());


router.get('/', function(req, res, next){
    res.render('register');
});

router.post('/', function(req, res, next){
    var user = {
        login: req.body.Login,
        password: req.body.Password,
        email: req.body.Email
    }

    MongoClient.connect(dbURL, function(err, db) {
        assert.equal(err, null);

        isInDB(user, db, function(){
            res.render('register', {err: 'Ten Login jest już zarejestrowany!'});
            db.close();

        }, function(){
            registerInDB(user, db, function () {
                db.close();
            });
            res.render('registerResult', {result: 'Zarejestrowano!'});

        });
    });
});

var registerInDB = function(obj, db, callback){
    var coll = db.collection('users');
    coll.insertOne(obj, null, function(err, res){
        assert.equal(err, null);
        assert.equal(1, res.result.n);
        callback(res);
    });
};

var isInDB = function(obj, db, isIt, isItNot){
    var coll = db.collection('users');
    coll.findOne({login: obj.login}, function(err, res){
        if(res) isIt();
        else isItNot();
        });
};

var CL = function(message){
  console.log(message);
};

module.exports = router;