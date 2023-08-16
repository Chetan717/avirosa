const PrRt = require("../Modal/PrRt");

// Create a new PrRt
const createPrRt = async (req, res) => {
  try {
    const newPrRt = new PrRt(req.body);
    await newPrRt.save();
    res.status(200).json({ message: "PrRt Added successfully !" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

// Get all PrRts
const getAllPrRts = async (req, res) => {
  try {
    const allPrRts = await PrRt.find();
    res.status(200).json(allPrRts);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get PrRt by ID
const getPrRtById = async (req, res) => {
  try {
    const PrRt = await PrRt.findById(req.params.id);
    if (!PrRt) {
      return res.status(404).json({ message: "PrRt not found" });
    }
    res.status(200).json(PrRt);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update PrRt by ID
const updatePrRtById = async (req, res) => {
  try {
    const updatedPrRt = await PrRt.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedPrRt) {
      return res.status(404).json({ message: "PrRt not found" });
    }
    res.status(200).json({ message: "PrRt updated Sucessfully !" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete PrRt by ID
const deletePrRtById = async (req, res) => {
  try {
    const deletedPrRt = await PrRt.findByIdAndDelete(req.params.id);
    if (!deletedPrRt) {
      return res.status(404).json({ message: "PrRt not found" });
    }
    res.status(200).json({ message: "PrRt deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createPrRt,
  getAllPrRts,
  getPrRtById,
  updatePrRtById,
  deletePrRtById,
};
