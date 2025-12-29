var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/test', function(req, res, next) {
  res.status(200).json({
    message: 'Data received successfully!',
    yourData: req.body
  })
});

module.exports = router;
