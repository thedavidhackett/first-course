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

router.get('/api/profile', function(req, res, next) {
  const testProfile = {
    name: 'David Hackett',
    birthDate: '7/7/1990',
    company: 'MediaCross',
    job: 'Programmer',
    avatar: '/sample/david.jpg',
    posts: [
      {id: 1,
      content: 'Test Post'},
      {id: 2,
      content: 'Another Test Post'},
    ]
  };
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(testProfile);
})

router.get('/api/jobs', function(req, res, next) {
  const jobs = [
    {
      id: 1,
      position: 'Line Cook',
      employer: "Jimmy's Bar and Restaurant",
      posted: '05/05/2019',
    },
    {
      id: 2,
      position: 'Server',
      employer: 'Trio Grill',
      posted: '05/02/2019',
    }
  ];
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(jobs);
})

module.exports = router;
