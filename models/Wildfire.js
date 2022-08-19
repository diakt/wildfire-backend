const mongoose = require('../connection')
const Schema = mongoose.Schema


const HikeSchema = new Schema(
    {
        incidentID: String, //Should be unique for each unique. We may get another unique key regardless from mongo
        stateAbb: String, //Two-letter abbreviation of state, replaces region - See commentary, still going to make regions
        
        
    }
)

const Hike = mongoose.model("Hike", HikeSchema)

module.exports = Hike