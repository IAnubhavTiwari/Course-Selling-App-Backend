const {Router} = require('express');
const {adminModel} = require('../db');
const adminRouter = Router();
const jwt = require('jsonwebtoken');
const JWT_ADMIN_PASSWORD = "luffyAdmin";

// adminRouter.use(adminMiddleware);

adminRouter.post("/signup",async (req, res) => {
  const {email, password,firstName, lastName} = req.body;

  await adminModel.create({
   email: email, 
   password: password, 
   firstName: firstName, 
   lastName: lastName
 });
 res.json(
   { message: "User signed up" });
  });
  
  //signin
  adminRouter.post("/signin", async (req, res) => {
    const {email, password} = req.body;

    const admin =await adminModel.findOne({
      email: email, 
      password: password
    });

    if(admin){
      const token = jwt.sign({
        id:admin._id
      }, JWT_ADMIN_PASSWORD);

      res.json({
        token: token
      });
    } else {
      res.status(403).json({
        message: "Invalid credentials"
      });
    }

  });


  //for creating a course
  adminRouter.post("/course", (req, res) => {
    res.json(
      { message: "User signed in" });
  });


  adminRouter.put("/course", (req, res) => {
    res.json(
      { message: "User signed in" });
  });


  adminRouter.get("/course/bulk", (req, res) => {
    res.json(
      { message: "User signed in" });
  });


  module.exports = adminRouter