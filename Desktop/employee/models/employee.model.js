const mongoose = require ('mongoose');
 var employeeSchema = new mongoose.Schema({
     fullName:{
         type:String
     },
     email:{
         type:String
     },
     mobile:{
         type:String
     },
     city:{
         type:String
     }
 });
employeeSchema.path('email').validate((val)=>{
    emailRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(val);
},'invalid e-mail.');
 

 mongoose.model('Employee',employeeSchema);