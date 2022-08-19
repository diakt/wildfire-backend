const mongoose = require('../connection')
const Schema = mongoose.Schema


const WildfireSchema = new Schema(
    {
        type:String,
        properties:Object,
        geometry: Array
    }
)

const Wildfire = mongoose.model("Wildfire", WildfireSchema)
module.exports = Wildfire


