var express = require('express');
var router = express.Router();
var authController = require('./../controllers/auth.js');
var userController = require('./../controllers/user');
var classifyController = require('./../controllers/classify');
var articleController = require('./../controllers/article');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login' , authController.login);
router.get('/user' , userController.list);
router.post('/user' , userController.insert);
router.put('/user/:id' , userController.update);
router.get('/classify' , classifyController.list);
router.post('/classify' , classifyController.insert);
router.put('/classify/:id' , classifyController.update);
router.get('/article' , articleController.list);
router.post('/article' , articleController.insert);
router.put('/article/:id' , articleController.update);
router.get('/article/:id' , articleController.show);


module.exports = router;
