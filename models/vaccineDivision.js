var mongoose = require('mongoose');

let vaccineDivisionSchema = new mongoose.Schema({
    divisionName:String,
    totalCenters:{type:Number, required:true} 
})

module.exports = new mongoose.Model('VaccineDivision', vaccineDivisionSchema);