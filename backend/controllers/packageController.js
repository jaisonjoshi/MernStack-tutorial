const Workout = require('../models/packageModel');
const mongoose = require('mongoose');

const getPackages = async (req,res) => {
    const packages = await Workout.find({}).sort({createdAt : -1})
    res.status(200).json(packages);
}


const addPackage = async (req,res) => {
    const {title, description, price} = req.body;

    try {
        const workout = await Workout.create({title, description, price});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = {
    getPackages, addPackage
}