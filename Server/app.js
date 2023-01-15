const express =require('express')
const app=express();
const morgan=require('morgan')
var cors = require('cors')
const cookieParser=require('cookie-parser');


const AppError = require('./utils/appError');
const globaleErrorHandeler = require('./controllers/errorController')
//const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');




        //Middleware
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use((req,res,next)=>{
        req.requestTime = new Date().toISOString();
        next();
})


app.get('/',(req,res)=>{
        res.status(200).send("Hello From Server side 👋 😄");
    })
    

        //Routes
//app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);



app.all('*',(req,res,next)=>{
        next(new AppError(`Can't find ${req.originalUrl} on this server!`,404));
});

app.use(globaleErrorHandeler);

module.exports = app;