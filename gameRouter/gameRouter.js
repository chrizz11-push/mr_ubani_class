const express= require("express")
const router= express.Router()
const {newGamer,allGamers, deleteAll, deleteGamers, updateGamers, singleGamers, uploadImage}=require("../gameContoller/gameController")


//new gamer router
router.post("/gamer", uploadImage, newGamer);

router.get("/gamer", allGamers)

router.get("/gamer/:id", singleGamers)

router.put("/gamer/:id", updateGamers)

router.delete("/gamer/:id", deleteGamers)

router.delete("/gamer/", deleteAll)


module.exports = router;





