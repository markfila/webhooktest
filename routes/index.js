var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/test', function (req, res, next) {
  res.set('Content-Type', 'application/xml');
    const xmlResponse = `
    <Response>
        <Message>We got your message, thank you!</Message>
    </Response>
  `;
  res.send(xmlResponse)
});

module.exports = router;
