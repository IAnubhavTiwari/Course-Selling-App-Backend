const {Router} = require('express');
const {userModel} = require('../db');
const jwt = require('jsonwebtoken');
const JWT_USER_PASSWORD = "luffy";


  const userRouter = Router();

    //signup
    userRouter.post("/signup", async (req, res) => {
      const {email, password,firstName, lastName} = req.body;

       await userModel.create({
        email: email, 
        password: password, 
        firstName: firstName, 
        lastName: lastName
      });
      res.json(
        { message: "User signed up" });
    });
    
    //signin
    userRouter.post("/signin",async (req, res) => {
      const {email, password} = req.body;

      const user =await userModel.findOne({
        email: email, 
        password: password
      });

      if(user){
        const token = jwt.sign({
          id:user._id
        }, JWT_USER_PASSWORD);

        res.json({
          token: token
        });
      } else {
        res.status(403).json({
          message: "Invalid credentials"
        });
      }

    });
    
    
    userRouter.get("/purchases", (req, res) => {
      res.json(
        { message: "User purchases" });
    });


  module.exports = userRouter
  
