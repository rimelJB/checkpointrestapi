const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./model/user");
const app = express();
const port = process.env.Port || 5000;
connectDB();

app.use(express.json());

//GET :  RETURN ALL USERS
app.get("/api/user", async (req, res) => {
  try {
    const data = await user.find({}).exec();
    res.json({ user: data });
  } catch (error) {
    res.send("get user failed");
  }
});

//POST :  ADD A NEW USER TO THE DATABASE
app.post("/api/user", (req, res) => {
  const { name, email, phone } = req.body;
  user.create({ name, email, phone }, (err) => {
    err ? res.send("add task failed") : res.send("add task succeeded");
  });
});

//PUT : EDIT A USER BY ID
app.put("/api/user/:_id", (req, res) => {
  user.findByIdAndUpdate(req.params.id, req.body, (err) => {
    err ? res.send("update failed") : res.send("update complete");
  });
});

//  DELETE : REMOVE A USER BY ID
app.delete("/api/user/:_id", (req, res) => {
  user.findByIdAndRemove(req.params.id, (err) => {
    err ? res.send("delete failed") : res.send("delete complete");
  });
});

app.listen(port, (err) =>{
  err ? console.log(err) : console.log(`the server is running on ${port}`)
});

