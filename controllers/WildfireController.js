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
        const Wildfire = await Wildfire.findById(req.params.id)
        res.json(Wildfire)
    }catch(err){
        next(err)
    }

})

router.get('/regions/:region', async(req, res, next) =>{
    const region = req.params.region
    let Wildfire = null;
    try{
        switch(region) { //does something based on what region equals, a pretty way for if/else, can scrap
            case "NE": //Northeast region
                Wildfire = await Wildfire.find({"stateAbb": {$in: ["CT","ME","MD","MA","NH","NJ","NY","PA","RI","VT"]}})
                break;
            case "SA": //Southatlantic region
                Wildfire = await Wildfire.find({"stateAbb": {$in: ["AL","DE","FL","GA","NC","SC","VA"]}})
                break;
            case "MW": //Midwest region
                Wildfire = await Wildfire.find({"stateAbb": {$in: ["IL","IN","IA","KS","MI","MN","MS","NE","ND","OH","SD","WV","WI"]}})
                break; 
            case "SC"://South central region
                Wildfire = await Wildfire.find({"stateAbb": {$in: ["AR","KY","LA","MO","OK","TN","TX"]}})
                break;
            case "M": //Mountain west region (M as MW taken, could be W for west)
                Wildfire = await Wildfire.find({"stateAbb": {$in: ["AZ","CO","ID","MT","NV","NM","UT","WY"]}})
                break;
            case "PC": //Pacific region (Not PC for Pacific coast, but could be)
                Wildfire = await Wildfire.find({"stateAbb": {$in: ["AK","CA","HI","OR","WA"]}})
                break;
            default:
                console.log("Bad call for region.")
                Wildfire = await Wildfire.find({})
                break;
        }
        res.json(Wildfire)
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


router.put('/:id', async(req, res, next) => {
	try {
		const updatedWildfire = await Wildfire.findByIdAndUpdate(req.params.id, req.body, { new: true })

		if (updatedWildfire) {
			res.json(updatedWildfire)
		} else {
			res.sendStatus(404)
		}
	}
	catch (err) {
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