const DcrStockiest = require("../Modal/DcrStock");
// Create a new stockiest
const createStockiest = async (req, res) => {
  try {
    // const { Code, DcrId } = req.body;
    // const tourProgram = await DcrStockiest.findOne({
    //   DcrId: DcrId,
    //   Code: Code,
    // });
    // if (tourProgram) {
    //   return res
    //     .status(409)
    //     .json({ message: "DCR Of This Stockiest Already Added!" });
    // }
    const newStockiest = new DcrStockiest(req.body);
    await newStockiest.save();
    res.status(200).json({ message: "Stockiest Added Succesfully !" });
  } catch (error) {
    res.status(500).json({ message: " Something went wrong" });
  }
};

// Get all stockiests
const getAllStockiests = async (req, res) => {
  try {
    const allStockiests = await DcrStockiest.find();
    res.status(200).json(allStockiests);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get stockiest by ID
const getStockiestById = async (req, res) => {
  try {
    const stockiest = await DcrStockiest.findById(req.params.id);
    if (!stockiest) {
      return res.status(404).json({ message: "Stockiest not found" });
    }
    res.status(200).json(stockiest);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getStockiestByTourId = async (req, res) => {
  try {
    // const createdBy = req.params.id;
    // const tourProgram = await DcrStockiest.find({ createdBy: createdBy });
    const dcrid = req.params.id;
    const tourProgram = await DcrStockiest.find({ DcrId: dcrid });
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

// Update stockiest by ID
const updateStockiestById = async (req, res) => {
  try {
    const updatedStockiest = await DcrStockiest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStockiest) {
      return res.status(404).json({ message: "Stockiest not found" });
    }
    res.status(200).json({ message: "Stockiest Updated" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete stockiest by ID
const deleteStockiestById = async (req, res) => {
  try {
    const deletedStockiest = await DcrStockiest.findByIdAndDelete(
      req.params.id
    );
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
  getStockiestByTourId,
  updateStockiestById,
  deleteStockiestById,
};
