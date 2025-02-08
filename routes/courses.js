const {Router} = require('express');

const courseRouter = Router();



    courseRouter.get("/preview", (req, res) => {
      res.json(
        { message: "Course preview"});
    });
  
    courseRouter.get("/purchase", (req, res) => {
      res.json(
        { message: "Course purchased" });
    });
  

  module.exports = courseRouter
