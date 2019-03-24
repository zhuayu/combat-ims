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
router.get('/user' , userController.show);
router.post('/user' , userController.insert);
router.put('/user/:id' , userController.update);
router.get('/classify' , classifyController.show);
router.post('/classify' , classifyController.insert);
router.put('/classify/:id' , classifyController.update);
router.get('/article' , articleController.show);
router.post('/article' , articleController.insert);
router.put('/article/:id' , articleController.update);

module.exports = router;
