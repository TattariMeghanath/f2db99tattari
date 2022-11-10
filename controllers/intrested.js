var intrested = require('../models/intrested'); 
 
// List of all intresteds 
exports.intrested_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: intrested list'); 
}; 
 
// for a specific intrested. 
exports.intrested_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: intrested detail: ' + req.params.id); 
}; 
 
// Handle intrested create on POST. 
exports.intrested_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: intrested create POST'); 
}; 
 
// Handle intrested delete form on DELETE. 
exports.intrested_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: intrested delete DELETE ' + req.params.id); 
}; 
 
// Handle intrested update form on PUT. 
exports.intrested_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: intrested update PUT' + req.params.id); 
}; 