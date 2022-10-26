const Workout = require('../models/packageModel');
const mongoose = require('mongoose');

const getPackages = async (req,res) => {
    const packages = await Workout.find({}).sort({createdAt : -1})
    res.status(200).json(packages);
}


module.exports = {
    getPackages
}