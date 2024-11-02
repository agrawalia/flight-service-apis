const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");
const { db } = require("../utils/db");


const getAllFlights = async(req, res) => {
    try {
        const {location, direction} = req.query;
    
        const [results] = await db.promise().query('SELECT * FROM flight where location = ', location,' and direction = ', direction);
    
        return res
        .status(200)
        .json(new ApiResponse(200, results, "Flights data !"));
    
    } catch (error) {
        return res
        .status(500)
        .json(new ApiError(500, "ERROR : flights -> getAllFlights", error));
    }
};


module.exports = {
    getAllFlights
}
