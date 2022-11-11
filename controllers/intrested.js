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
exports.intrested_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await intrested.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.intrested_type)  
               toUpdate.intrested_type = req.body.intrested_type; 
        if(req.body.section) toUpdate.section = req.body.section; 
        if(req.body.rollnumber) toUpdate.rollnumber = req.body.rollnumber; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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
// Handle intrested create on POST. 
exports.intrested_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new intrested(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"intrested_type":"goat", "section":12, "rollnumber":"large"} 
    document.subjectName = req.body.subjectName; 
    document.section = req.body.section; 
    document.rollnumber = req.body.rollnumber; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific intrested. 
exports.intrested_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await intrested.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 