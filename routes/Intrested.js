var express = require('express'); 
const intrested_controlers= require('../controllers/intrested'); 
var router = express.Router(); 
 
/* GET intresteds */ 
router.get('/', intrested_controlers.intrested_view_all_Page ); 
module.exports = router; 

// GET request for one intrested. 
router.get('/intresteds/:id', intrested_controlers.intrested_detail); 
/* GET detail intrested page */ 
router.get('/detail', intrested_controlers.intrested_view_one_Page);

/* GET create intrested page */ 
router.get('/create', intrested_controlers.intrested_create_Page); 
 
/* GET create update page */ 
router.get('/update', intrested_controlers.intrested_update_Page);

/* GET delete intrested page */ 
router.get('/delete', intrested_controlers.intrested_delete_Page);