const AddStdFare = require("../Modal/Fare");

// Create a new AddStdFare
const createAddStdFare = async (req, res) => {
  try {
    const newAddStdFare = new AddStdFare(req.body);
    await newAddStdFare.save();
    res.status(200).json({ message: "AddStdFare Added successfully !" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

// Get all AddStdFares
const getAllAddStdFares = async (req, res) => {
  try {
    const allAddStdFares = await AddStdFare.find();
    res.status(200).json(allAddStdFares);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get AddStdFare by ID
const getAddStdFareById = async (req, res) => {
  try {
    const AddStdFare = await AddStdFare.findById(req.params.id);
    if (!AddStdFare) {
      return res.status(404).json({ message: "AddStdFare not found" });
    }
    res.status(200).json(AddStdFare);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update AddStdFare by ID
const updateAddStdFareById = async (req, res) => {
  try {
    const updatedAddStdFare = await AddStdFare.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAddStdFare) {
      return res.status(404).json({ message: "AddStdFare not found" });
    }
    res.status(200).json({ message: "AddStdFare updated Sucessfully !" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete AddStdFare by ID
const deleteAddStdFareById = async (req, res) => {
  try {
    const deletedAddStdFare = await AddStdFare.findByIdAndDelete(req.params.id);
    if (!deletedAddStdFare) {
      return res.status(404).json({ message: "AddStdFare not found" });
    }
    res.status(200).json({ message: "AddStdFare deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createAddStdFare,
  getAllAddStdFares,
  getAddStdFareById,
  updateAddStdFareById,
  deleteAddStdFareById,
};
