const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const axios = require('axios');

var config = require('../config.json');

router.get('/', function (req, res){
  res.render('index.ejs')
})

router.post('/', function (req, res) {
  let name = req.body.name;
  let escaped = ejs.render(`<%= "${name}" %>`);

  let html = ejs.renderFile('views/cert.ejs', {name: escaped}, function(err, resp){
    let json = JSON.stringify({ body: resp });
    axios.post(config.backend_url + '/publish', json, {            
        headers: {
          'Content-Type': 'application/json'
        },
        responseType: 'arraybuffer'
      }).then(response => {
        res.end(Buffer.from(response.data), 'binary');
      })
        .catch(error => console.log(error));
  });
})

module.exports = router