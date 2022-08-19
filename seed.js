const wildfire = require('./2022.geojson')
console.log(wildfire)
const mongoose = require('./connection')

//Schemas
const Wildfire = require('./models/Wildfire')

//relevant data

Wildfire.deleteMany({})
    .then(()=>{
        return Wildfire.insertMany(wildfire)
    })
    .catch(error => console.log(error))
    .finally(()=> mongoose.connection.close())






