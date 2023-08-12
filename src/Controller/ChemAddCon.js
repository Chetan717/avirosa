const Chemist = require("../Modal/ChemModal");

// Create a new chemist
const createChemist = async (req, res) => {
  try {
    const newChemist = new Chemist(req.body);
    await newChemist.save();
    res.status(201).json(newChemist);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get all chemists
const getAllChemists = async (req, res) => {
  try {
    const allChemists = await Chemist.find();
    res.status(200).json(allChemists);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get chemist by ID
const getChemistById = async (req, res) => {
  try {
    const chemist = await Chemist.findById(req.params.id);
    if (!chemist) {
      return res.status(404).json({ message: "Chemist not found" });
    }
    res.status(200).json(chemist);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update chemist by ID
const updateChemistById = async (req, res) => {
  try {
    const updatedChemist = await Chemist.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedChemist) {
      return res.status(404).json({ message: "Chemist not found" });
    }
    res.status(200).json(updatedChemist);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete chemist by ID
const deleteChemistById = async (req, res) => {
  try {
    const deletedChemist = await Chemist.findByIdAndDelete(req.params.id);
    if (!deletedChemist) {
      return res.status(404).json({ message: "Chemist not found" });
    }
    res.status(200).json({ message: "Chemist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createChemist,
  getAllChemists,
  getChemistById,
  updateChemistById,
  deleteChemistById,
};
