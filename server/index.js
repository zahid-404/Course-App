const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.get("/", (req, res) => res.json({ msg: "hello world from the server" }));

mongoose.connect(
  "mongodb+srv://zahid:zahid495@cluster0.t7uye72.mongodb.net/course-app",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "course-app",
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(3000, () => console.log("Server running on port 3000"));
