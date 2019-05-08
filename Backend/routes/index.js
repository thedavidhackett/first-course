var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/posts', function(req, res, next) {
  const testPosts = [
    {
      id: 1,
      name: 'Roger Hornsby',
      content: 'Hello World',
    },
    {
      id: 2,
      name: 'Ty Cobb',
      content: 'Goodbye cruel world',
    }

  ]
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(testPosts);
})

module.exports = router;
