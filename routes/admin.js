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


  adminRouter.put("/course",adminMiddleware, async (req, res) => {
    const adminId = req.userId;
    const {title, description,imageURL, price, courseId} = req.body;

    const course = await courseModel.updateOne({
      _id: courseId,
      creatorId: adminId
    },{
      title: title,
      description: description,
      imageURL: imageURL,
      price: price
    });



    res.json(
      { message: "Course Updated" });
      courseId: course._id;
  });


  adminRouter.get("/course/bulk",adminMiddleware,async (req, res) => {

    const adminId = req.userId;
    const courses = await courseModel.find({
      creatorId: adminId
    });



    res.json(
      { message: "Course Updated" });
      courses: courses;
  });


  module.exports = adminRouter