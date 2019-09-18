var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/aa14', function(req, res, next) {
	res.render('aa14', { title: 'Express App', id: 'AA14', name: 'qzaq5985'});
});

module.exports = router;
