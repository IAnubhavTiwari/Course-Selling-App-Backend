const {Router} = require('express');
const userMiddleware = require('../middlewares/users');
const { purchaseModel,courseModel } = require('../db');

const courseRouter = Router();



    courseRouter.get("/preview", async (req, res) => {

      const courses = await courseModel.find({});

      res.json(
        { courses: courses });
    });
  
    courseRouter.post("/purchase",userMiddleware, async (req, res) => {
      const userId = req.userId;
      const courseId = req.body.courseId;

      await purchaseModel.create({
        userId: userId,
        courseId: courseId
      });

      res.json(
        { message: "Course purchased" });
    });
  

  module.exports = courseRouter
