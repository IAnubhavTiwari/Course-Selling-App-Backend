const express = require("express");
const app = express();
const userRouter = require("./routes/users");
const courseRouter = require("./routes/courses");


userRouter(app);
courseRouter(app);



app.listen(3000);