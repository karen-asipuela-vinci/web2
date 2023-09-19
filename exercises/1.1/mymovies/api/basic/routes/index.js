var express = require('express');
var router = express.Router();

const LISTMOVIES = [
  {
    id: 1,
    title: 'Insidious',
    duration: '1h30',
    budget: '2 millions'
  },
  {
    id: 2,
    title: 'Insidious 2',
    duration: '1h50',
    budget: '2 millions'
  },
  {
    id: 3,
    title: 'Insidious 3',
    duration: '1h45',
    budget: '2 millions'
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
