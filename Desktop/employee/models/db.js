const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('mongoDB connected successfully.');
    }else{
        console.log('error in mongoDB connection:' +err)
    }
});

require('./employee.model');