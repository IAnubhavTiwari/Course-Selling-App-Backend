const {Router} = require('express');
const {adminModel, courseModel} = require('../db');
const adminRouter = Router();
const jwt = require('jsonwebtoken');
const {JWT_ADMIN_PASSWORD} = require('../config');
const adminMiddleware = require('../middlewares/admin');


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
  adminRouter.post("/course",adminMiddleware, async (req, res) => {
    const adminId = req.userId;
    const {title, description,imageURL, price} = req.body;

    const course = await courseModel.create({
      title: title,
      description: description,
      imageURL: imageURL,
      price: price,
      creatorId: adminId
    });



    res.json(
      { message: "Course Created" });
      courseId: course._id;
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