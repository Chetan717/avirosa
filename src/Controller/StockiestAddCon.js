const Stockiest = require("../Modal/StockiestModal");

// Create a new stockiest
const createStockiest = async (req, res) => {
  try {
    const newStockiest = new Stockiest(req.body);
    await newStockiest.save();
    res.status(201).json(newStockiest);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get all stockiests
const getAllStockiests = async (req, res) => {
  try {
    const allStockiests = await Stockiest.find();
    res.status(200).json(allStockiests);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get stockiest by ID
const getStockiestById = async (req, res) => {
  try {
    const stockiest = await Stockiest.findById(req.params.id);
    if (!stockiest) {
      return res.status(404).json({ message: "Stockiest not found" });
    }
    res.status(200).json(stockiest);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update stockiest by ID
const updateStockiestById = async (req, res) => {
  try {
    const updatedStockiest = await Stockiest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStockiest) {
      return res.status(404).json({ message: "Stockiest not found" });
    }
    res.status(200).json(updatedStockiest);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete stockiest by ID
const deleteStockiestById = async (req, res) => {
  try {
    const deletedStockiest = await Stockiest.findByIdAndDelete(req.params.id);
    if (!deletedStockiest) {
      return res.status(404).json({ message: "Stockiest not found" });
    }
    res.status(200).json({ message: "Stockiest deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createStockiest,
  getAllStockiests,
  getStockiestById,
  updateStockiestById,
  deleteStockiestById,
};
