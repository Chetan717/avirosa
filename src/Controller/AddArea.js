const Area = require("../Modal/Area");

// Create a new Area
const createArea = async (req, res) => {
  try {
    const newArea = new Area(req.body);
    await newArea.save();
    res.status(200).json({ message: "Area Added successfully !" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

// Get all Areas
const getAllAreas = async (req, res) => {
  try {
    const allAreas = await Area.find();
    res.status(200).json(allAreas);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get Area by ID
const getAreaById = async (req, res) => {
  try {
    const Area = await Area.findById(req.params.id);
    if (!Area) {
      return res.status(404).json({ message: "Area not found" });
    }
    res.status(200).json(Area);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update Area by ID
const updateAreaById = async (req, res) => {
  try {
    const updatedArea = await Area.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedArea) {
      return res.status(404).json({ message: "Area not found" });
    }
    res.status(200).json({ message: "Area updated Sucessfully !" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete Area by ID
const deleteAreaById = async (req, res) => {
  try {
    const deletedArea = await Area.findByIdAndDelete(req.params.id);
    if (!deletedArea) {
      return res.status(404).json({ message: "Area not found" });
    }
    res.status(200).json({ message: "Area deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createArea,
  getAllAreas,
  getAreaById,
  updateAreaById,
  deleteAreaById,
};
