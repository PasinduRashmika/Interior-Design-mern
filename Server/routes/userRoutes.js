const express =require('express')

const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router=express.Router();

router.post('/signup',authController.signup);
router.post('/login',authController.login);

router.post('/fogotPassword',authController.fogotPassword);
router.patch('/resetPassword/:token',authController.resetPassword);

router.patch('/updatePassword',authController.protect,authController.updatePassword);

router.patch('/updateMe',authController.protect,userController.updateMe);
router.delete('/deleteMe',authController.protect,userController.deleteMe);

router
  .route('/')
  .get(authController.protect,userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(authController.protect,userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);



module.exports= router;