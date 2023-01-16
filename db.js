let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/vehical_details')
mongoose.set('strictQuery', true)