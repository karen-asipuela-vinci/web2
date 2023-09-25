var express = require('express');
var router = express.Router();

const LISTMOVIES = [
  {
    id: 1,
    title: 'Insidious',
    duration: 162,
    budget: '2 millions'
  },
  {
    id: 2,
    title: 'Insidious 2',
    duration: 120,
    budget: '2 millions'
  },
  {
    id: 3,
    title: 'Insidious 3',
    duration: 140,
    budget: '2 millions'
  }
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  res.json(LISTMOVIES);
});

/*premiere opé à rajouter */
router.get('')

module.exports = router;
