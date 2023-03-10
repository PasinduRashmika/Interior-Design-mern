const express =require('express')

const userController = require('./../controllers/userController');
const authController = require('./../controllers/AuthController');

const router=express.Router();

router
  .route('/')
  .get(/*authController.protect,*/userController.getAllUsers)
  .post(userController.createUser);

router.post('/signup',authController.signup);
router.post('/login',authController.login);
router.get('/login',authController.logout);
router.get('/getUserProfile',/*authController.protect,*/authController.getUserProfile);

router.post('/forgotPassword',authController.forgotPassword);
router.patch('/resetPassword/:token',/*authController.protect,*/authController.resetPassword);

router.patch('/updatePassword',authController.protect,authController.protect,authController.updatePassword);

router.patch('/updateMe',authController.protect,userController.updateMe);
router.delete('/deleteMe',authController.protect,userController.deleteMe);



router
  .route('/:id')
  .get(/*authController.protect,*/userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);



module.exports= router;