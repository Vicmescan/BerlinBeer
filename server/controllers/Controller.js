// import the model
import dbModel from '../models/Model.js';

// Method for CRUD operations

// Show all data
export const getAllData = async(req, res) => {
    try {
        const bars = await dbModel.findAll()
        res.json(bars)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Show one data
export const getOneData = async(req, res) => {
    try {
        const bar = await dbModel.findAll({
            where: { id: req.params.id }
        })
        res.json(bar[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}
