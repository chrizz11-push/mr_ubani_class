const express =require("express")
const gameModel=require("../gameModel/gameModel")
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req,res,cd)=> {
        cd(null,"./uploads")
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname)
    }
});

const uploadImage = multer({storage}).single("image")


const newGamer= async (req,res) =>{
try{
    const gamer= await gameModel.create({
        name:req.body.name,
        game:req.body.game,
        date:Date.now(),

    })
    res.status(200).json({gamer})
}

catch(error){
    res.status(400).json({message:error.message})
}

}

const allGamers=async(req,res)=>{
    try {
        const gamers= await gameModel.find()
        res.status(201).json({gamers})
    }
    catch(error){
        res.status(400).json({message:error.message})

    }
}

const singleGamers=async(req,res)=>{
    try {
        const gamer= await gameModel.findById(req.params.id)
        res.status(201).json({gamer})
    }
    catch(error){
        res.status(400).json({message:error.message})

    }
}

const updateGamers=async(req,res)=>{
    try {
        const gamer= await gameModel.findById(req.params.id)
        const updatedgamers= await gameModel.updateOne(req.body)
        res.status(201).json({updatedgamers})
    }
    catch(error){
        res.status(400).json({message:error.message})

    }
}

const deleteGamers=async(req,res)=>{
    try {
        const gamer= await gameModel.findById(req.params.id)
        const deletedgamer= await gameModel.updateOne(req.body)
        res.status(201).json({deletedgamer})
    }
    catch(error){
        res.status(400).json({message:error.message})

    }
}

const deleteAll=async(req,res)=>{
    try {
        const gamers= awaitgameModel.deleteMany()
        res.status(201).json({message:"deleted successfully"})
    }
    catch(error){
        res.status(400).json({message:error.message})

    }
}

module.exports={newGamer,allGamers, deleteAll, deleteGamers, updateGamers, singleGamers, uploadImage}






























