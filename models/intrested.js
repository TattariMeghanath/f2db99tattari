const mongoose = require("mongoose") 
const intrestedSchema = mongoose.Schema({ 
    subjectName: String, 
    section: String, 
 rollnumber:
 {
    type:  Number,
    min:25,
    max:50
 } 
}) 
 
module.exports = mongoose.model("intrested", intrestedSchema) 