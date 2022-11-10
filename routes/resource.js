var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var  intrested_controller = require('../controllers/intrested'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// intrested ROUTES /// 
 
// POST request for creating a intrested.  
router.post('/ intrested',  intrested_controller. intrested_create_post); 
 
// DELETE request to delete intrested. 
router.delete('/ intrested/:id',  intrested_controller. intrested_delete); 
 
// PUT request to update intrested. 
router.put('/ intrested/:id',  intrested_controller. intrested_update_put); 
 
// GET request for one intrested. 
router.get('/ intrested/:id',  intrested_controller. intrested_detail); 
 
// GET request for list of all intrested items. 
router.get('/ intrested', intrested_controller. intrested_list); 
 
module.exports = router; 