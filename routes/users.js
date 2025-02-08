

function userRouterCreate(app) {
    //signup
    app.post("/user/signup", (req, res) => {
      res.json(
        { message: "User signed up" });
    });
    
    //signin
    app.post("/user/signin", (req, res) => {
      res.json(
        { message: "User signed in" });
    });
    
    
    app.get("/user/purchases", (req, res) => {
      res.json(
        { message: "User purchases" });
    });
  }

  module.exports = { userRouterCreate: userRouterCreate }
