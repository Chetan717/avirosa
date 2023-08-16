const HeadQ = require("../Modal/HeadQ");

// Create a new HeadQ
const createHeadQ = async (req, res) => {
  try {
    const newHeadQ = new HeadQ(req.body);
    await newHeadQ.save();
    res.status(200).json({ message: "HeadQ Added successfully !" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

// Get all HeadQs
const getAllHeadQs = async (req, res) => {
  try {
    const allHeadQs = await HeadQ.find();
    res.status(200).json(allHeadQs);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get HeadQ by ID
const getHeadQById = async (req, res) => {
  try {
    const HeadQ = await HeadQ.findById(req.params.id);
    if (!HeadQ) {
      return res.status(404).json({ message: "HeadQ not found" });
    }
    res.status(200).json(HeadQ);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update HeadQ by ID
const updateHeadQById = async (req, res) => {
  try {
    const updatedHeadQ = await HeadQ.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedHeadQ) {
      return res.status(404).json({ message: "HeadQ not found" });
    }
    res.status(200).json({ message: "HeadQ updated Sucessfully !" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete HeadQ by ID
const deleteHeadQById = async (req, res) => {
  try {
    const deletedHeadQ = await HeadQ.findByIdAndDelete(req.params.id);
    if (!deletedHeadQ) {
      return res.status(404).json({ message: "HeadQ not found" });
    }
    res.status(200).json({ message: "HeadQ deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createHeadQ,
  getAllHeadQs,
  getHeadQById,
  updateHeadQById,
  deleteHeadQById,
};
