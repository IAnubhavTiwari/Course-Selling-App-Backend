
function createCourseRoute(app) {
    app.get("/course/preview", (req, res) => {
      res.json(
        { message: "Course preview"});
    });
  
    app.get("/course/purchase", (req, res) => {
      res.json(
        { message: "Course purchased" });
    });
  }

  module.exports = {
    createCourseRoute: createCourseRoute
}
