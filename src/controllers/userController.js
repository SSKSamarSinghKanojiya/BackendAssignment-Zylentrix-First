const mongoose = require("mongoose");
const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      return res.status(400).json({ error: "Name, email, and age required" });
    }
    const user = new User({ name, email, age });

    await user.save();

    res
      .status(201)
      .json({ success: true, message: "Create User Successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error ", error: error.message });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const user = await User.find();

    res.status(201).json({ success: true, message: "All User Details ", user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error ", error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const user = await User.findById(id);

    res
      .status(201)
      .json({ success: true, message: "Get User Detail By ID", user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error ", error: error.message });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const user = await User.findByIdAndUpdate(id, updateData, { new: true });

    res
      .status(200)
      .json({ success: true, message: "User updated successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error ", error: error.message });
  }
};

exports.removedata = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }

    const user = await User.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "User Delete Successfully "});
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error ", error: error.message });
  }
};
