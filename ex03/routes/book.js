var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서검색',pageName:'book/search.ejs'});
});

module.exports = router;

