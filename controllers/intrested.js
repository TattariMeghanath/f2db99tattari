var intrested = require('../models/intrested'); 
// List of all intrested 
exports.intrested_list = async function(req, res) { 
    try{ 
        
        theintrested = await intrested.find(); 
        res.send(theintrested); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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
// VIEWS 
// Handle a show all view 
exports.intrested_view_all_Page = async function(req, res) { 
    try{ 
        
        theintrested = await intrested.find();        
        res.render('intrested', { title: 'intrested Search Results', results: theintrested }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   /*
    try{ 
        theintrested = await intrested.find(); 
        console.log(theintrested);
        res.render('intrested', { title: 'intrested Search Results', results: theintrested }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }*/
};
