var express = require('express');
var router = express.Router();
const Image = require('../models/image')

/* GET home page. */
router.get('/',  async function(req, res, next) {
  // res.render('index', { title: 'Lomodomo' });

  try {
    Image.find({})
      .then(images => {
        res.render('images-index', { images });
      })
  }
  catch(error) {
    console.log(error.message);
    res.send(500);
  }
  
});

module.exports = router;