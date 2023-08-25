const DcrChem = require("../Modal/DcrChem");

// Create a new chemist
const createChemist = async (req, res) => {
  try {
    const newChemist = new DcrChem(req.body);
    await newChemist.save();
    res.status(200).json({ message: "DCR Chemist Added successfully !" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

// Get all chemists
const getAllChemists = async (req, res) => {
  try {
    const allChemists = await DcrChem.find();
    res.status(200).json(allChemists);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getChemistByTourId = async (req, res) => {
  try {
    const dcrid = req.params.id;
    const tourProgram = await DcrChem.find({ DcrId: dcrid });

    if (!tourProgram) {
      return res
        .status(404)
        .json({ message: " Dcr Chemist Not Found not found" });
    }
    res.status(200).json(tourProgram);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

// Get chemist by ID
const getChemistById = async (req, res) => {
  try {
    const chemist = await DcrChem.findById(req.params.id);
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
    const updatedChemist = await DcrChem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedChemist) {
      return res.status(404).json({ message: "Chemist not found" });
    }
    res.status(200).json({ message: "Chemist updated Sucessfully !" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete chemist by ID
const deleteChemistById = async (req, res) => {
  try {
    const deletedChemist = await DcrChem.findByIdAndDelete(req.params.id);
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
  getChemistByTourId,
  getAllChemists,
  getChemistById,
  updateChemistById,
  deleteChemistById,
};
