var express = require('express'); 
const intrested_controlers= require('../controllers/intrested'); 
var router = express.Router(); 
 
/* GET intresteds */ 
router.get('/', intrested_controlers.intrested_view_all_Page ); 
module.exports = router; 