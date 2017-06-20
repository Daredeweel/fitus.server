var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
   res.render('index', {
       cardTitle: 'Kcalculator - Dieta idealna co do grama!'
   });
});
module.exports = router;