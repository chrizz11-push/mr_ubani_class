const mongoose=require("mongoose")

const gameSchema =mongoose.Schema({
    name:{
        type:"String",
        required:true,
},

game:{
    type:"String",
    required:true,
    },
    
image:{
    type:"String",
    required:true,
    },

date:{
    type:Date,
    default: Date.now(),

}
})

const gameModel=mongoose.model("gameModel",gameSchema)
module.exports= gameModel;







