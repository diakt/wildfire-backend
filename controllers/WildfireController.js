const express = require('express')
const router = express.Router();
const Wildfire = require('../models/Wildfire')



router.get('/', async(req, res, next) =>{
    try{
        const Wildfires = await Wildfire.find({})
        res.json(Wildfires)
    }catch(err){
        next(err)
    }
})

router.get('/:id', async(req, res, next) =>{
    try{
        const Wildfires = await Wildfire.findById(req.params.id)
        res.json(Wildfires)
    }catch(err){
        next(err)
    }

})









router.post('/', async(req, res, next) => {
    try{
        const newWildfire = await Wildfire.create(req.body)
        res.status(201).json(newWildfire)
    } catch(err){
        next(err)
    }
})


router.delete('/:id', async(req, res, next) => {
    try{
        const deletedWildfire = await Wildfire.findByIdAndDelete(req.params.id)
        res.json(deletedWildfire)
    } catch(err){
        next(err)
    }
})
module.exports = router