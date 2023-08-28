const express = require("express");
const router = express.Router();
const User = require("../model/dbSchema");
const core = require("cors");
router.use(core());

router.post("/", async (req, res) => {
  try {
    const newUser = await new User(req.body);
    await newUser.save();
    res.status(200);
    res.json(newUser);
  } catch (error) {
    res.status(400).json(error);
    console.log("catch block");
    console.log(error.message);
  }
});

router.get("/allusers", async (req, res) => {
  try {
    const allUser = await User.find();
    res.status(200);
    res.send(allUser);
  } catch (error) {
    res.status(400);
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteUser = await User.deleteOne({ email: id });
    res.status(200).json(deleteUser);
    console.log("deleted", deleteUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

// get single user data

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.find({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
});

// Edit user

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const responce = await User.updateOne({ _id: id }, data);
    res.status(200).json(responce);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
