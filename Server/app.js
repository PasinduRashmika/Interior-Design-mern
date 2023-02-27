const express =require('express')
const app=express();
const morgan=require('morgan')
var cors = require('cors')
const cookieParser=require('cookie-parser');
const path = require('path'); 

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


        //Routes
//app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);

if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../interior_design/build')));
        
    
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../interior_design/build/index.html'))
    
        })
    }



app.all('*',(req,res,next)=>{
        next(new AppError(`Can't find ${req.originalUrl} on this server!`,404));
});

app.use(globaleErrorHandeler);

module.exports = app;