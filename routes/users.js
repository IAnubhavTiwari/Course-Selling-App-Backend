const {Router} = require('express');


  const userRouter = Router();

    //signup
    userRouter.post("/signup", (req, res) => {
      res.json(
        { message: "User signed up" });
    });
    
    //signin
    userRouter.post("/signin", (req, res) => {
      res.json(
        { message: "User signed in" });
    });
    
    
    userRouter.get("/purchases", (req, res) => {
      res.json(
        { message: "User purchases" });
    });


  module.exports = userRouter
