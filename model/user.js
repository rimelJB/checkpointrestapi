const mongoose=require('mongoose');
const {Schema,model}= mongoose;

const userSchema= new Schema({
    name:{
       type: String ,       
       require:true
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:Number,
        require:true
    }
})
const user=mongoose.model('user', userSchema)
module.exports=user