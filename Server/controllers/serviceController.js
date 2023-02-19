const  Service  = require("../models/service");
const catchAsync = require("../utils/catchAsync")
const AppError = require('./../utils/appError');

exports.getAllUsers =catchAsync( async(req,res)=>{
    const service = await Service.find();

    if(!service){
        return next(new AppError('Something went wrong'),500);
    }
    res.status(200).json({
        status:'success',
        data:{
            service
        }
    })
    // res.status(500).json({
    //     status:'err',
    //     message:'This route is not yet define' 
    // })
});