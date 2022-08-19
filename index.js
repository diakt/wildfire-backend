//Basic Config
const express = require('express');
const app = express();

const cors = require('cors');
const PORT = process.env.PORT || 8080;
require('./connection')

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes 
app.get('/', (req, res) =>{
	res.redirect('/api/wildfires')
})

const wildfireController = require('./controllers/WildfireController')
app.use('/api/hikes', hikeController)






//Listener 
app.listen(PORT, () => {
	console.log('Connection made on ' + PORT);
});

