const {Router} = require('express');

const adminRouter = Router();

adminRouter.use(adminMiddleware);

adminRouter.post("/signup", (req, res) => {
    res.json(
      { message: "User signed up" });
  });
  
  //signin
  adminRouter.post("/signin", (req, res) => {
    res.json(
      { message: "User signed in" });
  });


  //for creating a course
  adminRouter.post("/course", (req, res) => {
    res.json(
      { message: "User signed in" });
  });


  module.exports = adminRouter