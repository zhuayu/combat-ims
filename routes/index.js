var express = require('express');
var router = express.Router();
var indexController = require('./../controllers/index');

/* GET home page. */
router.get('/', indexController.renderIndex);
router.get('/article/:id', indexController.renderArticle);
router.get('/admin/*', function(req,res,next){
  res.render('admin');
});

module.exports = router;
