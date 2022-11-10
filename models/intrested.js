const mongoose = require("mongoose") 
const intrestedSchema = mongoose.Schema({ 
    subjectName: String, 
    section: String, 
 rollnumber: Number 
}) 
 
module.exports = mongoose.model("intrested", intrestedSchema) 