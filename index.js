const express = require("express");
const app = express();
const userRouter = require("./routes/users");
const courseRouter = require("./routes/courses");
const adminRouter = require("./routes/admin");

app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);



app.listen(3000);